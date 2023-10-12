import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CronosSection() {
  return (
    <>
        {/* Tabs Section */}
        <View className="justify-between flex-row items-center mt-5">
            <View className="flex-row">
                <Text className="text-white text-2xl mr-4">Meus</Text>
                <Text className="text-white font-bold text-2xl">Cronos</Text>
            </View>
            <View className="flex-row">
                <TouchableOpacity>
                  <Image className="h-12 w-12"
                  source={require('../../assets/icons/favorite-button.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image className="h-12 w-12"
                  source={require('../../assets/icons/recent-button.png')}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* Cronos Section */}
        <View className="h-32 bg-white rounded-3xl mt-5"/>
        <View className="h-32 bg-white rounded-3xl mt-5"/>
        <View className="h-32 bg-white rounded-3xl mt-5"/>
        <View className="h-32 bg-white rounded-3xl mt-5"/>
        <View className="h-32 bg-white rounded-3xl mt-5"/>
        <View className="h-32 bg-white rounded-3xl mt-5"/>
        <View className="h-32 bg-white rounded-3xl mt-5"/>
    </>
  )
}