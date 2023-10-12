import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        
    )
}