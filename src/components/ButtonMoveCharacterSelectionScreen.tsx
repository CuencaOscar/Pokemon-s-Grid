import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  direction: string,
  onPress?: () => void
}

export const ButtonMoveCharacterSelectionScreen = ({ direction, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[
        styles.container,
        (direction === 'left') ?
          {
            borderLeftWidth: 0,
            borderRightWidth: 40
          } :
          {
            borderLeftWidth: 40,
            borderRightWidth: 0
          }]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderColor: 'white',
    borderWidth: 0,
    borderTopWidth: 20,
    borderTopColor: 'transparent',
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  }
})

export default ButtonMoveCharacterSelectionScreen;