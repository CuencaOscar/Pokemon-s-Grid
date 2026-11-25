import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  text: string,
  onPress: () => void
}

export const ButtonCharacterSelectionScreen = ({ text, onPress }: Props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} accessibilityRole="button">
      <Icon name="play" size={14} color="#111827" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    backgroundColor: '#facc15',
  },
  text: {
    marginLeft: 6,
    color: '#111827',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
})

export default ButtonCharacterSelectionScreen;
