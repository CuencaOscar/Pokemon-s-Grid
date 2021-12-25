import React from 'react'
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';

interface Props {
  picture: string
}

export const ImagePlayerGameScreen = ({ picture }: Props) => {

  const { width, height } = useWindowDimensions()

  const heightBigSquare = (height * 0.5)

  const widthBigSquare = (width * 0.25)

  return (
    <Image
      style={{ ...styles.image, width: (width > 600) ? widthBigSquare : width*0.5, height: (width > 600) ? heightBigSquare : height*0.25 }}
      source={{ uri: picture }}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain'
  },
})

export default ImagePlayerGameScreen;