import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ id, content, open, onClick }) => {
    return (
        <TouchableOpacity
            onPress={() => onClick(id)}
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
        borderWidth: 1,
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