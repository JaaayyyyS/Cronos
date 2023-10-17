import { View, Text } from 'react-native'
import React from 'react'

export default function Month({ name, year, days, markedDays }) {
  const returnCol = (name, day) => {
    const colDays = []
    let colDay = day
    let dayDuplicated = false

    for (let i = 0; i < 5; i++) {
      days.forEach(d => {
        if(d.day == colDay && !dayDuplicated) {
          dayDuplicated = true
          colDays.push(d)
        }
      });

      colDay += 7
      colDay > days.length? null: null
      dayDuplicated = false
    }

    return(
      <>
        <View className="flex-col items-center justify-between mt-5">
          <Text className="text-lg text-white">{name}</Text>
          {
            colDays.map((day) => {
              return (
                <>
                  {
                    day.markedDay? 
                    <Text key={Math.floor(Math.random()*99999)} className="text-base text-pink-500 mt-2">{day.day}</Text> 
                    : 
                    <Text key={Math.floor(Math.random()*99999)} className="text-base text-white mt-2">{day.day}</Text>
                  }
                </>
              )
            })
          }
        </View>
      </>
    )
  }

  return (
    <>
    <View className="p-5 mt-3">
      <View className="flex-row">
        <Text style={{color: "#FF5321"}}
        className="font-bold text-3xl">{year}</Text>
        <Text style={{color: "#FF5321"}}
        className="font-bold text-3xl ml-5">{name}</Text>
      </View>

      {/* Days Section */}
        
        <View className="flex-row justify-between">
          <View>{returnCol("Seg", 1)}</View>
          <View>{returnCol("Ter", 2)}</View>
          <View>{returnCol("Qua", 3)}</View>
          <View>{returnCol("Qui", 4)}</View>
          <View>{returnCol("Sex", 5)}</View>
          <View>{returnCol("Sab", 6)}</View>
          <View>{returnCol("Dom", 7)}</View>
        </View>
      </View>
    </>
  )
}