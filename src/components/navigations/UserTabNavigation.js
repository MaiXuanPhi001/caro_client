import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Profile from '../screens/Profiles/Profile';

const Tab = createBottomTabNavigator();

const UserTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='HomeStack' component={HomeStack} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default UserTabNavigation

const styles = StyleSheet.create({})