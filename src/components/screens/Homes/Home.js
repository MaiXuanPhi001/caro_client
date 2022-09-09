import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {

  const handleFindMatch = () => {
    navigation.navigate('FindMatch')
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleFindMatch} title='Tìm trận' />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})