import { View, Text } from 'react-native'
import React from 'react'
import Month from './month'
import CalendarLogic from '../logic/calendar-logic'

export default function CalendarSection() {
  return (
    <>
    <View>
      <Month name={CalendarLogic.months[0].name} 
      year={CalendarLogic.months[0].year} 
      days={CalendarLogic.months[0].days} 
      markedDays={CalendarLogic.months[0].markedDays}/>

      <Month name={CalendarLogic.months[1].name} 
      year={CalendarLogic.months[1].year} 
      days={CalendarLogic.months[1].days} 
      markedDays={CalendarLogic.months[1].markedDays}/>
    </View>
    </>
  )
}