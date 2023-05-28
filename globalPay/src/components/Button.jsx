import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} className = " bg-slate-900  w-full h-14 rounded-md flex justify-center items-center">
        <Text className = "text-white text-xl">{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button