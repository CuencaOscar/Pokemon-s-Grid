import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { Button, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import ButtonGameScreen from '../components/ButtonGameScreen';
import ImagePlayerGameScreen from '../components/ImagePlayerGameScreen';
import { RootStackParams } from '../navigator/Navigator';
import ScoreGamScreen from '../components/ScoreGamScreen';
import BoardGameScreen from '../components/BoardGameScreen';
import { usePokemon } from '../hooks/usePokemon';
import useBoardLogicGameScreen from '../hooks/useBoardLogicGameScreen';
import { useIsFocused } from '@react-navigation/native';
import {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';

interface Props extends StackScreenProps<RootStackParams, 'GameScreen'> { }

const GameScreen = ({ navigation, route }: Props) => {

  const isFocused = useIsFocused();

  if (isFocused) {
    console.log('El GameScreen esta activo')
  }
  else {
    console.log('El GameScreen esta inactivo')
  }

  const { name, picture, id } = route.params.simplePokemon

  const { isLoading, pokemon } = usePokemon(id)

  const { width, height } = useWindowDimensions()

  const { i, j, visitado, tablero, posiciones, score, ash, level, jugador, TurnRight, TurnLeft, TurnUp, TurnDown, NextLevel, GameOver } = useBoardLogicGameScreen()

  useEffect(() => {
    GameOver()
  }, [width])

  hideNavigationBar();

  return (
    <View style={{ flex: 1, flexDirection: (width > 600) ? 'row' : 'column', backgroundColor: 'black' }}>
      <View>
        <ScoreGamScreen picture={picture} name={name} score={score} ash={ash} level={level} />
        <BoardGameScreen name={name} j={j} visitado={visitado} i={i} tablero={tablero} posiciones={posiciones} />
      </View>
      <View style={{flexDirection: (width > 600) ? 'column' : 'row',}}>
        <ImagePlayerGameScreen picture={picture} />
        <ButtonGameScreen TurnRight={TurnRight} TurnLeft={TurnLeft} TurnUp={TurnUp} TurnDown={TurnDown} />
      </View>
      <Modal visible={ash === 0} statusBarTranslucent animationType='slide' transparent={true} >
        <View style={{ backgroundColor: 'black', width: width, height: height, opacity: 0.6, position: 'absolute' }} />
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 30 }}>Victoria</Text>
          <Button title='Next Level' onPress={NextLevel} />
        </View>
      </Modal>
      <Modal visible={(posiciones.slice(0, 6).includes(jugador) || posiciones.slice(12, 17).includes(jugador))} statusBarTranslucent animationType='slide' transparent={true} >
        <View style={{ backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.6, position: 'absolute' }} />
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 30 }}>Game Over</Text>
          <Button title='Restart Game' onPress={GameOver} />
        </View>
      </Modal>
    </View>
  )
}

export default GameScreen;