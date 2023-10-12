import { View, Text } from 'react-native'
import React from 'react'

export default function CalendarSection() {
  return (
    <>
    <View className="flex-col p-5">
      <Text className="text-3xl mb-6 font-bold"
      style={{color: "#FF5321"}}
      >2023 Janeiro</Text>
      <View className="flex-row justify-between">
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>seg</Text>
          <Text className="text-white text-lg">01</Text>
          <Text className="text-white text-lg">08</Text>
          <Text className="text-white text-lg">15</Text>
          <Text className="text-white text-lg">12</Text>
          <Text className="text-white text-lg">29</Text>
        </View>
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>ter</Text>
          <Text className="text-white text-lg">02</Text>
          <Text className="text-white text-lg">09</Text>
          <Text className="text-white text-lg">16</Text>
          <Text className="text-white text-lg">23</Text>
          <Text className="text-white text-lg">30</Text>
        </View>
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>qua</Text>
          <Text className="text-white text-lg">03</Text>
          <Text className="text-white text-lg">10</Text>
          <Text className="text-white text-lg">17</Text>
          <Text className="text-white text-lg">24</Text>
          <Text className="text-white text-lg">31</Text>
        </View>
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>qui</Text>
          <Text className="text-white text-lg">04</Text>
          <Text className="text-white text-lg">11</Text>
          <Text className="text-white text-lg">18</Text>
          <Text className="text-white text-lg">25</Text>
          <Text className="text-white text-lg"
          style={{color: "rgba(243, 236, 228, 0.7)"}}
          >01</Text>
        </View>
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>sex</Text>
          <Text className="text-white text-lg">05</Text>
          <Text className="text-white text-lg">12</Text>
          <Text className="text-white text-lg">19</Text>
          <Text className="text-white text-lg">26</Text>
          <Text className="text-white text-lg"
          style={{color: "rgba(243, 236, 228, 0.7)"}}
          >02</Text>
        </View>
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>sab</Text>
          <Text className="text-white text-lg">06</Text>
          <Text className="text-white text-lg">13</Text>
          <Text className="text-white text-lg">20</Text>
          <Text className="text-white text-lg">27</Text>
          <Text className="text-white text-lg"
          style={{color: "rgba(243, 236, 228, 0.7)"}}
          >03</Text>
        </View>
        <View className="flex-col justify-center items-center gap-3">
          <Text className="text-xl"
          style={{color: "rgba(243, 236, 228, 0.7)"}}>dom</Text>
          <Text className="text-white text-lg">07</Text>
          <Text className="text-white text-lg">14</Text>
          <Text className="text-white text-lg">21</Text>
          <Text className="text-white text-lg">28</Text>
          <Text className="text-white text-lg"
          style={{color: "rgba(243, 236, 228, 0.7)"}}
          >04</Text>
        </View>
      </View>
    </View>
    </>
  )
}