import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAswome5 from 'react-native-vector-icons/FontAwesome5';

const Icon = ({name,text}) => {
    return(
        <TouchableOpacity>
        <View>
            <FontAswome5 name={name} size ={24} style = {{marginBottom:2 , alignSelf : "center"}} />
            <Text>{text}</Text>
        </View>
        </TouchableOpacity>
        
    )
}



function BottomTabs() {
  return (
    <View style = {{
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around",
        margin: 10,
    }}>
    <Icon  name = "home" text = "Home" />
    <Icon  name = "search" text = "Browse" />
    <Icon  name = "shopping-bag" text = "Grocery" />
    <Icon  name = "receipt" text = "Orders" />
    <Icon  name = "user" text = "Account" />
    </View>
  )
}




export default BottomTabs;