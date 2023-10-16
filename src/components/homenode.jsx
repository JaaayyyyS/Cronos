import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeNode({ navigation }) {
  return (
    <View className="absolute bottom-10 right-1">
        <View className="flex-row">
            <TouchableOpacity
            onPress={() => navigation.navigate('calendar')}
            >
              <Image className="h-20 w-20"
              source={require('../../assets/icons/calendar-button.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => navigation.navigate('add-cronos')}
            >
              <Image className="h-20 w-20"
              source={require('../../assets/icons/add-button.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}