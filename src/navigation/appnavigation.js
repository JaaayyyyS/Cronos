import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "../screens/home";
import CalendarScreen from "../screens/calendar";
import AddCronosModal from "../screens/add-cronos";

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false, animation: "slide_from_left"}}/>
                    <Stack.Screen name="calendar" component={CalendarScreen} options={{headerShown: false, animation: "slide_from_right"}}/>
                    <Stack.Screen name="add-cronos" component={AddCronosModal} options={{headerShown: false, animation: "slide_from_bottom"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        
    )
}