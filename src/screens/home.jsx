import { View, ScrollView, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "../components/header";
import Slogan from "../components/slogan";
import CronosSection from "../components/cronos-section";
import HomeNode from "../components/homenode";

export default function HomeScreen({ navigation }) {
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
            <ScrollView>
                <View className="p-5">
                    <Header/>
                    <Slogan/>
                    <CronosSection/>
                </View>
            </ScrollView>

            <HomeNode navigation={navigation}/>
        </View>
        </>
    )
}