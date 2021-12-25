import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  text: string,
  onPress: () => void
}

export const ButtonCharacterSelectionScreen = ({ text, onPress }: Props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  text: {
    paddingVertical: 0,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 15
  }
})

export default ButtonCharacterSelectionScreen;