import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Slogan({ navigation }) {
  return (
    <ImageBackground imageStyle={{
        borderRadius: 40,
        borderTopLeftRadius: 10,
    }}
    resizeMode='cover' source={require('../../assets/image/slogan-bg.png')}
    className="mt-7 h-72 justify-center">
        <View className="flex-col justify-center ml-10">
            <Image className="h-10 w-32 mb-3"
            source={require('../../assets/image/cronos-logo.png')}
            />
            <View>
                <Text className="text-white text-xl">Crie momentos,</Text>
                <Text className="text-white text-xl">compartilhe</Text>
                <Text className="text-white text-xl">com a gente.</Text>
            </View>
            <TouchableOpacity className="w-60 p-3 rounded-xl pl-4 mt-5"
            style={{backgroundColor: '#FF5321'}}
            onPress={() => navigation.navigate('add-cronos')}
            >
                <Text className="text-lg text-white ml-2">Criar agora!</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}