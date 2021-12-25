import React from 'react'
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  TurnRight: () => void,
  TurnLeft: () => void,
  TurnUp: () => void,
  TurnDown: () => void,
}

const ButtonGameScreen = ({ TurnRight, TurnLeft, TurnUp, TurnDown }: Props) => {

  const { width, height } = useWindowDimensions()

  const heightBigSquare = (height * 0.5)

  const widthBigSquare = (width * 0.25)

  const heightSmallSquare = heightBigSquare * 0.35

  const widthSmallSquare = heightBigSquare * 0.35

  return (
    <View style={{ width: (width > 600) ? widthBigSquare : width * 0.5, height: (width > 600) ? heightBigSquare : height * 0.25 }}>
      <View style={styles.container}>
        <TouchableOpacity style={{ ...styles.squares, height: (width > 600) ? heightSmallSquare : height * 0.25*0.35, width: (width > 600) ? heightSmallSquare : height * 0.25*0.35, top: 0, left: (width > 600) ? 0.5 * widthBigSquare - 0.5 * widthSmallSquare : 0.5*width * 0.5 - 0.5*height * 0.25*0.35 }} onPress={TurnUp}>
          <Icon name='arrow-up' size={45} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.squares, height: (width > 600) ? heightSmallSquare : height * 0.25*0.35, width: (width > 600) ? heightSmallSquare : height * 0.25*0.35, top: (width > 600) ? 0.5 * heightBigSquare - 0.5 * heightSmallSquare : 0.5 * height * 0.25 - 0.5 * height * 0.25*0.35, left: 0 }} onPress={TurnLeft}>
          <Icon name='arrow-back' size={45} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.squares, height: (width > 600) ? heightSmallSquare : height * 0.25*0.35, width: (width > 600) ? heightSmallSquare : height * 0.25*0.35, bottom: 0, left: (width > 600) ? 0.5 * widthBigSquare - 0.5 * widthSmallSquare : 0.5 * width * 0.5 - 0.5 * height * 0.25*0.35 }} onPress={TurnDown}>
          <Icon name='arrow-down' size={45} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.squares, height: (width > 600) ? heightSmallSquare : height * 0.25*0.35, width: (width > 600) ? heightSmallSquare : height * 0.25*0.35, top: (width > 600) ? 0.5 * heightBigSquare - 0.5 * heightSmallSquare : 0.5 * height * 0.25 - 0.5 * height * 0.25*0.35, right: 0 }} onPress={TurnRight}>
          <Icon name='arrow-forward' size={45} color="black" />
        </TouchableOpacity>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 1000
  },
  squares: {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ButtonGameScreen;