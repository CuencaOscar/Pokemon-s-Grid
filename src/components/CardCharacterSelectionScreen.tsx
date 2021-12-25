import React from 'react'
import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import usePokemonSelector from '../hooks/usePokemonSelector';
import ButtonCharacterSelectionScreen from './ButtonCharacterSelectionScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useNavigation } from '@react-navigation/native';

interface Props {
  simplePokemon: SimplePokemon[],
}

const CardCharacterSelectionScreen = ({ simplePokemon }: Props) => {

  const { width, height } = useWindowDimensions()

  const navigation = useNavigation()

  const orientacionHorizontal = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={simplePokemon}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({ item }) =>
            <View style={{ ...styles.containerFlatlist, ...styles.container, width: width * 0.3, height: height * 0.6 }}>
              <Image
                source={{ uri: item.picture }}
                style={{ ...styles.container, resizeMode: 'contain', width: (width * 0.3) * 0.8, height: (height * 0.6) * 0.7 }}
              />
              <View style={{ width: (width * 0.3) * 0.8, height: (height * 0.6) - (height * 0.6) * 0.7 }}>
                <ButtonCharacterSelectionScreen text={item.name.toUpperCase()} onPress={() => navigation.navigate('GameScreen', { simplePokemon: item })} />
              </View>
            </View>
          }
        />
      </View>
    )
  }

  const orientacionVertical = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={simplePokemon}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({ item }) =>
            <View style={{ ...styles.containerFlatlist, ...styles.container, height: height * 0.3, width: width * 0.6 }}>
              <Image
                source={{ uri: item.picture }}
                style={{ ...styles.container, resizeMode: 'contain', height: (height * 0.3) * 0.8, width: (width * 0.6) * 0.7 }}
              />
              <View style={{ height: (width * 0.3) * 0.8, width: (height * 0.6) - (height * 0.6) * 0.7 }}>
                <ButtonCharacterSelectionScreen text={item.name.toUpperCase()} onPress={() => navigation.navigate('GameScreen', { simplePokemon: item })} />
              </View>
            </View>
          }
        />
      </View>
    )
  }

  return (
    <>
      {(width > 600) ? orientacionHorizontal() : orientacionVertical()}
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerFlatlist: {
    borderRadius: 15,
    marginHorizontal: 15,
  }
})

export default CardCharacterSelectionScreen;