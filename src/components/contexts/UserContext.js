import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import { login } from '../Services/UserService'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { contants } from '../utils/Contants';
import { loginFacebook } from '../Services/UserService';

export const UserContext = createContext()

export const UserContextProvider = props => {
    const { children } = props
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const onLogin = async (email, password) => {
        const res = await login(email, password)
        if (!res.error) {
            if (res.result_code === 1) {
                await AsyncStorage.setItem(contants.STORAGE_KEY, res.data.token)
                setUserInfo(res.data)
                return 1
            }
            return 0
        }
        return -1
    }

    const onLoginFacebook = async (info) => {
        const res = await loginFacebook(info)
        if (!res.error) {
            setUserInfo(res.data)
            setIsLoggedIn(true)
            return true
        }
        return false
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                userInfo,
                setUserInfo,
                onLogin,
                onLoginFacebook
            }}
        >
            {children}
        </UserContext.Provider>
    )
}