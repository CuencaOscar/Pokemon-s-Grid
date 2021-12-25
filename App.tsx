import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
import { StatusBar } from 'react-native';

const App = () => {

  hideNavigationBar();

  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Navigator />
    </NavigationContainer>
  )
}

export default App;