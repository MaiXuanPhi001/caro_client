import { Button, StyleSheet, Text, View, ScrollView, Platform, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import Main from './Main'
import Rank from './Rank'

const Home = ({ navigation }) => {
  
  const handleFindMatch = () => {
    navigation.navigate('FindMatch')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Main onPress={handleFindMatch} />
      <Rank />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  }
})