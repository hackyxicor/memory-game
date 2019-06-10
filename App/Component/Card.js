import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ card, onPress }) => {
    const { content, open, matched } = card;
    return (
        <TouchableOpacity
            onPress={() => {
                if (!open && !matched) {
                    onPress(card);
                }
            }}
            style={[styles.card, open ? styles.cardOpen : styles.cardClosed]}
        >
            {
                open ?
                    <Text style={styles.text} >{content}</Text> : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 5,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardClosed: {
        backgroundColor: 'purple'
    },
    cardOpen: {
        backgroundColor: 'white'
    },
    text: {
        fontWeight: '500',
        color: 'black',
        fontSize: 20
    }
})

export default Card;