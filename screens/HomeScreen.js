import { View, Text, ScrollView } from 'react-native'
import React , {useState} from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurentItems from '../components/RestaurentItems'

import { localRestaurents } from '../components/RestaurentItems'

export default function HomeScreen() {
  const [restaurentData, setrestaurentData] = useState(localRestaurents);

  return (
    <View style = {{ flex : 1, backgroundColor : "#eee"}}>
        <View style = {{backgroundColor : "white"}}>
          <HeaderTabs />
          <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <Categories />
              <RestaurentItems restaurentData = {restaurentData} />
          </ScrollView>
    </View>
  )
}