import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function AddCronosModal() {
  const insets = useSafeAreaInsets()

  return (
    <>
    {/* Status Bar and Main Container Configuration */}
    <StatusBar style="light"/>
    <View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
        backgroundColor: '#1A1818',
        flex: 1,
    }}
    >
        {/* Header */}
        <View className="flex-row h-24 justify-between p-5 items-center">
          <Text className="text-white text-xl">Adicionar evento</Text>
          <View className="flex-row gap-5 items-center">
            <Text className="font-bold text-lg"
            style={{color: "#FF5321"}}>Salvar</Text>
            <Text className="text-sm"
            style={{color: "rgba(243, 236, 228, 0.7)"}}>Cancelar</Text>
          </View>
        </View>

        {/* Add Section */}
        <View className="p-8">
          <View>
            <TextInput className="h-10 w-full text-lg text-white"
            placeholder='Digite seu título!'
            placeholderTextColor={"rgba(243, 236, 228, 0.7)"}
            />
          </View>
          {/* Option Section */}
          <View className="flex-col justify-between mt-6">
            <View className="flex-col justify-between gap-3">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Image className="h-16 w-16" source={require('../../assets/icons/clock.png')}/>
                  <Text className="text-white ml-3 text-lg">Data</Text>
                </View>
                <Text className="text-white text-sm">8 de Nov. de 2023</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Image className="h-16 w-16" source={require('../../assets/icons/clock.png')}/>
                  <Text className="text-white ml-3 text-lg">Horário</Text>
                </View>
                <Text className="text-white text-sm">12:00 AM/PM</Text>
              </View>
            </View>

            <View className="flex-col justify-between gap-3 mt-8">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Image className="h-16 w-16" source={require('../../assets/icons/clock.png')}/>
                  <Text className="text-white ml-3 text-lg">Papel de parede</Text>
                </View>
                <Text className="text-white text-sm">Selecionar</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Image className="h-16 w-16" source={require('../../assets/icons/clock.png')}/>
                  <Text className="text-white ml-3 text-lg flex-wrap w-36">Cronômetro com fundo escuro</Text>
                </View>
                <Text className="text-white text-sm">=</Text>
              </View>
            </View>
          </View>
        </View>
    </View>
    </>
  )
}