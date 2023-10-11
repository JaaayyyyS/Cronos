import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
    return(
        <>
        <View className="flex-1 justify-center items-center">
            <Text className="text-base text-black">
                Olá mundo!
            </Text>
        </View>
        </>
    )
}