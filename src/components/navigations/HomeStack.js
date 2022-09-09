import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Homes/Home'
import FindMatch from '../screens/findmatch/FindMatch'
import PvsP from '../screens/PvsP/PvsP'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='FindMatch' component={FindMatch} />
            <Stack.Screen name='PvsP' component={PvsP} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})