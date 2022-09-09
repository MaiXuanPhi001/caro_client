import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Hello from '../screens/hellos/Hello'
import MainNavigation from './MainNavigation'

const Stack = createNativeStackNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Hello' component={Hello} />
        <Stack.Screen name='MainNavigation' component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container

const styles = StyleSheet.create({})