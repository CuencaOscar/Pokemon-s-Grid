import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import CardPortada from '../components/CardPortada';
import { useIsFocused } from '@react-navigation/native';
import Sound from 'react-native-sound'
import {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';

interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({ navigation }: Props) => {

  hideNavigationBar();

  const { width, height } = useWindowDimensions()

  const orientacionHorizontal = () => {
    return (
      <ImageBackground
        resizeMode='cover'
        style={styles.imageBackground}
        source={require('../assets/PokemonPortada.jpg')}
      >
        <CardPortada navigation={() => navigation.navigate('CharacterSelectionScreen')} width={width} height={height}/>
      </ImageBackground>
    )
  }

  const orientacionVertical = () => {
    return (
      <ImageBackground
        resizeMode='cover'
        style={styles.imageBackground}
        source={require('../assets/PokemonPortada2.jpg')}
      >
        <CardPortada navigation={() => navigation.navigate('CharacterSelectionScreen')} width={height} height={width}/>
      </ImageBackground>
    )
  }

  return (
    <View style={{width: width, height: '100%'}}>
      {(width > 600) ? orientacionHorizontal() : orientacionVertical()}
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen;