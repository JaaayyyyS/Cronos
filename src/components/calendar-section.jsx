import { View, Text } from 'react-native'
import React from 'react'
import Month from './month'

export default function CalendarSection() {
  return (
    <>
      <Month name={"Janeiro"} year={2023} days={31} markedDays={[7]}/>
    </>
  )
}