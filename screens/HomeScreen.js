import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function HomeScreen() {
  return (
    <View style = {{ flex : 1, backgroundColor : "#eee"}}>
        <View style = {{backgroundColor : "white"}}>
            <HeaderTabs />
            <SearchBar />
        </View>
    </View>
  )
}