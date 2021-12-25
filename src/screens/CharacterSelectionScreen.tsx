import React, { useEffect, useState } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import CardCharacterSelectionScreen from '../components/CardCharacterSelectionScreen'
import ButtonMoveCharacterSelectionScreen from '../components/ButtonMoveCharacterSelectionScreen';
import usePokemonSelector from '../hooks/usePokemonSelector';
import { StackScreenProps } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';

const CharacterSelectionScreen = ( ) => {

  const { isLoading, simplePokemon, loadNextPokemon, loadPreviousPokemon } = usePokemonSelector()

  return (
    <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop:15 }}>
        <Text style={{ fontSize: 25, color: 'white' }}> Character Selection </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
        <View style={{ flexDirection: 'row', alignItems:'center'}}>
          <ButtonMoveCharacterSelectionScreen direction={'left'} onPress={loadPreviousPokemon} />
          <CardCharacterSelectionScreen simplePokemon={simplePokemon}/>
          <ButtonMoveCharacterSelectionScreen direction={'right'} onPress={loadNextPokemon} />
        </View>
      </View>
    </View>
  )
}

export default CharacterSelectionScreen;