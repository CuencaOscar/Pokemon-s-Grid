import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  picture: string,
  name: string,
  score: number,
  ash: number,
  level: number
}


const ScoreGamScreen = ({ picture, name, score, ash, level }: Props) => {

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black' , borderColor: 'white', borderWidth:1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{name.toUpperCase()}</Text>
        <Text style={styles.subtitle}>{score}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Level</Text>
        <Text style={styles.subtitle}>{level}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Ash</Text>
        <Text style={styles.subtitle}>{ash}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    color: 'white'
  }
})

export default ScoreGamScreen;