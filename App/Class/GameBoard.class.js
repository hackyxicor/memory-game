import { CreateArrayOfSize, ShuffleArray } from "../Utils/common";

class GameBoard {
    constructor(level = 1) {
        this.level = level;
    }

    generateGameBoard = () => {
        const { level } = this;
        const numOfCards = 4 * level;
        const maxTime = 600 + (numOfCards * 30);

        const columns = Math.ceil(Math.sqrt(numOfCards));
        const rows = Math.floor(numOfCards / columns);

        const perMatchScore = level * 2;

        return {
            numRow: rows,
            numCol: columns,
            maxTime: maxTime,
            perMatchScore: perMatchScore,
            cards: this.generateCards(rows, columns, numOfCards)
        }
    }


    generateCards = (rows, columns, numOfCards) => {
        const cards = {};
        const numbersArray = CreateArrayOfSize(numOfCards / 2);
        console.log('numbersArray', numbersArray);
        let i = 0;
        const cardsNumbersArray = ShuffleArray([...numbersArray, ...numbersArray]);

        CreateArrayOfSize(rows).forEach((row) => {
            CreateArrayOfSize(columns).forEach((column) => {
                cards[`${row},${column}`] = { index: `${row},${column}`, content: cardsNumbersArray[i], open: false, matched: false }
                i++;
            })
        })

        return cards; r
    }
}

export default GameBoard;
