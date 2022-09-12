import { StyleSheet, Image } from 'react-native'
import React, { Profiler } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();

const UserTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <Image source={require('../../assets/images/tab/main2.png')} />
                        else return <Image source={require('../../assets/images/tab/main.png')} />
                    }
                }}
            />
            <Tab.Screen
                name='ProfileStack'
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <Image source={require('../../assets/images/tab/user2.png')} />
                        else return <Image source={require('../../assets/images/tab/user.png')} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default UserTabNavigation

const styles = StyleSheet.create({})