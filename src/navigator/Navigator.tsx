import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterSelectionScreen from '../screens/CharacterSelectionScreen';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined,
  CharacterSelectionScreen: undefined,
  GameScreen: { simplePokemon: SimplePokemon }
}

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor:'white'
        }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CharacterSelectionScreen" component={CharacterSelectionScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;