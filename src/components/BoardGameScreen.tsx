import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import BoardFirstGameScreen from './BoardFirstGameScreen'

interface Props {
    name: string,
    j: number,
    i: number,
    visitado: number[],
    tablero: number[],
    posiciones: number[]
}

const BoardGameScreen = ({ name, i, j, visitado, tablero, posiciones }: Props) => {

    const { width, height } = useWindowDimensions()

    const heightBigSquare = (height * 0.90)

    const widthBigSquare = (width * 0.75)

    return (
        <View style={{ width: (width > 600) ? widthBigSquare : width, height: (width > 600) ? heightBigSquare : height*0.75, alignItems: 'center', justifyContent: 'center' }}>
            <BoardFirstGameScreen name={name} i={i} j={j} visitado={visitado} tablero={tablero} posiciones={posiciones} />
        </View>
    )
}

export default BoardGameScreen;