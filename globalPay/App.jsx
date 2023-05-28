import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import Home from './src/components/Home'
import nativewind from 'nativewind'
const App = () => {
  return (
    <SafeAreaView className = "bg-black">
      <Home/>
      <Text>hello</Text>
    </SafeAreaView>
  )
}

export default App