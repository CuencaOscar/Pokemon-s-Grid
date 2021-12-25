import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  text: string,
  onPress?: () => void
}

const ButtonPortada = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={ styles.container } onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 17
  }
})

export default ButtonPortada;