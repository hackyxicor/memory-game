import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Grid from './Component/Grid';
import GameBoard from './Class/GameBoard.class';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      cards: [],
      columns: 0,
      rows: 0,
      timeLeft: 10000000,
      selectItems: [],
      score: 0
    }
  }

  componentDidMount = () => {
    this.generateGameBoard();
  }

  generateGameBoard = () => {
    const { level } = this.state;
    const gb = new GameBoard(level);
    const gameBoard = gb.generateGameBoard();

    this.setState({ cards: gameBoard.cards, columns: gameBoard.numCol, rows: gameBoard.numRow, timeLeft: gameBoard.maxTime });
    this.perMatchScore = gameBoard.perMatchScore;
  }

  onPressCard = (card) => {
    this.setCardState(card, true, this.pushIndexToSelected)
  }

  pushIndexToSelected = (index) => {
    this.setState({ selectItems: [...this.state.selectItems, index] }, () => {
      setTimeout(this.handleMatchingCards, 1000);
    })
  }

  handleMatchingCards = () => {
    const { selectItems, cards } = this.state;
    console.log('selectItems', selectItems);
    if (selectItems.length == 2) {
      const firstCard = cards[selectItems[0]];
      const secondCard = cards[selectItems[1]];

      if (firstCard.content == secondCard.content) {
        this.markMatched(firstCard);
        this.markMatched(secondCard);
        this.increaseScore();
        this.checkIfCompleted();
        this.clearSelected();
      } else {
        this.setCardState(firstCard, false);
        this.setCardState(secondCard, false);
        this.clearSelected();
      }
    }
  }

  clearSelected = () => {
    this.setState({ selectItems: [] })
  }

  increaseScore = () => {
    this.setState({ score: this.state.score + this.perMatchScore })
  }

  checkIfCompleted = () => {
    const { cards } = this.state;
  }

  markMatched = (card) => {
    this.setState({ cards: { ...this.state.cards, [card.index]: { ...card, matched: true } } })
  }

  setCardState = (card, status, callback = () => { }) => {
    const index = card.index;
    this.setState({ cards: { ...this.state.cards, [index]: { ...card, open: status } } }, () => callback(index))
  }



  render() {
    const { rows, columns, cards } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'red' }} >

        </View>
        <View style={styles.boardContainerr} >
          <Grid
            rows={rows}
            columns={columns}
            cards={cards}
            onPressCard={this.onPressCard}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boardContainerr: {
    flex: 5,
    padding: 20
  }
});
