import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/logins/Login'
import Register from '../screens/registers/Register'
import ForgotPassword from '../screens/forgotPassword/FogotPassword'
import Otp from '../screens/otp/Otp'
import ChangePassword from '../screens/changePassword/ChangePassword'

const Stack = createNativeStackNavigator()

const UserStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Otp' component={Otp} />
            <Stack.Screen name='ChangePassword' component={ChangePassword} />
        </Stack.Navigator>
    )
}

export default UserStackNavigation

const styles = StyleSheet.create({})