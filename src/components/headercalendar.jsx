import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderCalendar({ navigation }) {
  return (
    <>
    <View className="flex-row justify-between items-center mb-5">
        <View className="flex-row">
            <Image className="h-16 w-16"
            source={require('../../assets/image/profile-picture.png')}/>
            <View className="flex-col ml-4 justify-center">
                <Text className="text-white text-2xl">Calendário</Text>
                <Text style={{color: "rgba(243, 236, 228, 0.7)"}}
                className="text-white text-md">Deslize para fechar</Text>
            </View>
        </View>
        <TouchableOpacity
        onPress={() => {navigation.navigate('home')}}
        >
          <Image className="h-14 w-14"
          source={require('../../assets/icons/close-button.png')}/>
        </TouchableOpacity>
    </View>
    </>
  )
}