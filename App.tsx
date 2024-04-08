import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation';

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})