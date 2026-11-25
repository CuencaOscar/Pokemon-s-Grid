import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  direction: string,
  onPress?: () => void
}

export const ButtonMoveCharacterSelectionScreen = ({ direction, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={direction === 'left' ? 'Previous Pokémon' : 'Next Pokémon'}
    >
      <Icon name={direction === 'left' ? 'chevron-back' : 'chevron-forward'} size={28} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.14)',
  }
})

export default ButtonMoveCharacterSelectionScreen;
