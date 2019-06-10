import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { CreateArrayOfSize } from './Utils';
import Card from './Card';

const Grid = ({ size }) => {
    let columns = Math.sqrt(size);
    const lines = Math.ceil(size / columns);
    columns = Math.round(columns);

    return (
        <View style={styles.wrap}>
            {
                CreateArrayOfSize(lines).map((l) => (
                    <View style={styles.row} >
                        {
                            CreateArrayOfSize(columns).map((c) => {
                                return (
                                    <Card />
                                )
                            })
                        }
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    card: {
        flex: 1,
        padding: 5,
        margin: 5,
        borderWidth: 1
    }
})

export default Grid;