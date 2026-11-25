import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  picture: string,
  name: string,
  score: number,
  ash: number,
  level: number
}

const Stat = ({ label, value }: { label: string, value: number }) => (
  <View style={styles.stat}>
    <Text style={styles.label} numberOfLines={1}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
)

const ScoreGamScreen = ({ name, score, ash, level }: Props) => {

  return (
    <View style={styles.bar}>
      <Stat label={name.toUpperCase()} value={score} />
      <Stat label="Level" value={level} />
      <Stat label="Ash left" value={ash} />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'black',
  },
  stat: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#94a3b8',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
})

export default ScoreGamScreen;
