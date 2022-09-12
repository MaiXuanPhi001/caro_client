import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/profiles/Profile'
import PvsP from '../screens/PvsP/PvsP'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name='CounDown' component={CounDown} /> */}
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='PvsP' component={PvsP} />
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})