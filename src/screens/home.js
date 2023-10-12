import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
    const insets = useSafeAreaInsets()

    return(
        /* Main Container */
        <View className="flex-1 justify-center items-center"
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingRight: insets.right,
            paddingLeft: insets.left
        }}
        >
            <Text className="text-base text-black">
                Olá mundo!
            </Text>
        </View>
    )
}