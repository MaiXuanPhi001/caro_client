import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/logins/Login'
import Register from '../screens/registers/Register'

const Stack = createNativeStackNavigator()

const UserStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export default UserStackNavigation

const styles = StyleSheet.create({})