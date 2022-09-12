import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Hello = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('MainNavigation'), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode='contain'
        source={require('../../../assets/images/carohello.png')}
      />
      <Text style={styles.text}>Caro Online</Text>
    </View>
  )
}

export default Hello

const styles = StyleSheet.create({
  text: {
    color: '#091E42',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 20,
  },
  img: {
    width: 80,
    height: 80
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})