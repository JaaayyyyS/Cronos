import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
    const insets = useSafeAreaInsets()

    return(
        <>
        {/* Status Bar Configuration */}
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
            {/* Main Container */}
            <ScrollView className="p-8"
            >

                {/* Header */}
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
                {/* Profile Arrow */}
                <Image className="h-10 w-12 ml-12"
                source={require('../../assets/icons/arrow.png')}/>

                {/* Slogan */}
                <ImageBackground source={require('../../assets/image/slogan-bg.png')}
                className="mt-7 h-56 justify-center rounded-tl-xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                    <View className="flex-col justify-center ml-7">
                        <Image className="h-8 w-24"
                        source={require('../../assets/image/cronos-logo.png')}
                        />
                        <View>
                            <Text className="text-white text-xl">Crie momentos,</Text>
                            <Text className="text-white text-xl">compartilhe</Text>
                            <Text className="text-white text-xl">com a gente.</Text>
                        </View>
                        <TouchableOpacity className="w-52 p-1 rounded-xl pl-4 pb-2 mt-3"
                        style={{backgroundColor: '#FF5321'}}
                        >
                            <Text className="text-lg text-white ml-2">Criar agora!</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
        </>
    )
}