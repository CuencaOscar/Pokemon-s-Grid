import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardCharacterSelectionScreen from '../components/CardCharacterSelectionScreen'
import ButtonMoveCharacterSelectionScreen from '../components/ButtonMoveCharacterSelectionScreen';
import usePokemonSelector from '../hooks/usePokemonSelector';

const CharacterSelectionScreen = () => {

  const { simplePokemon, loadNextPokemon, loadPreviousPokemon } = usePokemonSelector()

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Pokémon's Grid</Text>
        <Text style={styles.title}>Choose your Pokémon</Text>
        <Text style={styles.subtitle}>Browse with the arrows and tap the name to play</Text>
      </View>
      <View style={styles.stage}>
        <View style={styles.glow} />
        <View style={styles.row}>
          <ButtonMoveCharacterSelectionScreen direction={'left'} onPress={loadPreviousPokemon} />
          <CardCharacterSelectionScreen simplePokemon={simplePokemon} />
          <ButtonMoveCharacterSelectionScreen direction={'right'} onPress={loadNextPokemon} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0b1020',
  },
  header: {
    marginTop: 36,
    alignItems: 'center',
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#facc15',
  },
  title: {
    marginTop: 6,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#94a3b8',
  },
  stage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(250, 204, 21, 0.08)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default CharacterSelectionScreen;
