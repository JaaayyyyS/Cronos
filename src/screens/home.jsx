import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "../components/header";
import Slogan from "../components/slogan";

export default function HomeScreen() {
    const insets = useSafeAreaInsets()

    return(
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
            {/* Scroll Container */}
            <ScrollView className="p-8">
                <Header/>
                <Slogan/>
            </ScrollView>
        </View>
        </>
    )
}