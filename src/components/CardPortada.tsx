import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import ButtonPortada from './ButtonPortada';
import TextPortada from './TextPortada';

interface Props {
  navigation: () => void,
  width: number,
  height: number
}

const CardPortada = ({ navigation, width, height }: Props) => {

  // const { width, height } = useWindowDimensions()

  let portada = new Sound('portada.mp3')

  const [onOff, setOnOff] = useState(true)

  console.log(portada.isPlaying())

  useEffect(() => {
    return () => {
      portada.stop()
    }
  }, [])

  return (
    <View style={{ ...styles.containerGeneral, width: width * 0.35, height: height * 0.85 }}>
      <View style={styles.container} />
      <TextPortada text={"Mario's"} />
      <TextPortada text={"Grid"} />
      <ButtonPortada text={'High Scores'} />
      <ButtonPortada text={'Music'} onPress={() =>  (!portada.isPlaying()) ? (portada.setNumberOfLoops(-1), portada.setCurrentTime(5), portada.play()) : portada.stop() } />
      <ButtonPortada text={'Instructions'}/>
      <ButtonPortada text={'Play'} onPress={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerGeneral: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
  },
  container: {
    opacity: 0.2,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 25,
  }
})

export default CardPortada;