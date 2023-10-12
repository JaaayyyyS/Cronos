import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <>  
    <View className="flex-row justify-between items-center">
        <View className="flex-row">
            <Image className="h-16 w-16"
            source={require('../../assets/image/profile-picture.png')}/>
            <View className="flex-col ml-4">
                <Text className="text-white text-2xl">Olá,</Text>
                <Text className="text-white text-2xl">Isabelle!</Text>
            </View>
        </View>
        <Image className="h-14 w-14"
        source={require('../../assets/icons/options-burguer.png')}/>
    </View>
    
    <Image className="h-10 w-12 ml-12"
    source={require('../../assets/icons/arrow.png')}/>
    </>
  )
}