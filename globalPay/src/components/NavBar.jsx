import { View, Text } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <View className = "h-72 w-full bg-[#0D1C2E] relative">
        <View className = "w-[350px] h-[350px] rounded-full bg-[#1E2E3D] z-10 absolute top-[-60%] left-[-29%]"></View>
        <View className = "w-[500px] h-[500px] rounded-full bg-[#152534] -z-10 absolute top-[-80%] left-[-35%]">
        </View>
      <Text className = "text-white absolute top-[50%] w-[200px] text-3xl z-50">WELCOME TO  THE APP</Text>
      <Text className = "text-white absolute bottom-[7%] w-[200px] text-md z-50">Sign in to your account</Text>

    </View>
  )
}

export default NavBar