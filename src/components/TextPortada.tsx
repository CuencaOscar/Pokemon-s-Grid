import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    text: string
}

const TextPortada = ({text}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default TextPortada;