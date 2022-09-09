import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import UserStackNavigation from './UserStackNavigation'
import UserTabNavigation from './UserTabNavigation'
import { UserContext } from '../contexts/UserContext'

const MainNavigation = () => {
    const { isLoggedIn } = useContext(UserContext)

    return (
        <>
            {isLoggedIn ? <UserTabNavigation /> : <UserStackNavigation /> }
        </>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})