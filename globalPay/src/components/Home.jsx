import { View, Text } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import LoginContainer from './LoginContainer'

const Home = () => {
  return (
    <View>
        <NavBar/>
      <Text>Home</Text>
      <LoginContainer/>
    </View>
  )
}

export default Home