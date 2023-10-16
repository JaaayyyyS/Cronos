import { View, Text } from 'react-native'
import React from 'react'

export default function Month({ name, year, days, markedDays }) {
  return (
    <>
    <View className="p-5 mt-3">
      <View className="flex-row">
        <Text style={{color: "#FF5321"}}
        className="font-bold text-3xl">{year}</Text>
        <Text style={{color: "#FF5321"}}
        className="font-bold text-3xl ml-5">{name}</Text>
      </View>

      
    </View>
    </>
  )
}