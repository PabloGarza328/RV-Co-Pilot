import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { StatusBar } from 'expo-status-bar'


const Home = () => {
  return (
    <View style={styles.container}>
    <MapView style={styles.map} />
      <StatusBar style="auto" />
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});


