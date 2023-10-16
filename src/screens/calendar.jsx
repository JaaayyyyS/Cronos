import { View, ScrollView } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CalendarSection from '../components/calendar-section';
import HeaderCalendar from '../components/headercalendar';

export default function CalendarScreen({ navigation }) {
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
          <View className="p-5">
            <HeaderCalendar navigation={navigation}/>
            <ScrollView>
              <CalendarSection/>
            </ScrollView>
          </View>
        </View>
    </>
  )
}