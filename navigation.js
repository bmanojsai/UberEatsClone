import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";

function RootNavigation() {
    const stack = createStackNavigator();
    
    const screenOptions = { 
        headerShown : false
    }

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={screenOptions} initialRouteName = "Home">
                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="Details" component={RestaurantDetailsScreen} />
            </stack.Navigator>
        </NavigationContainer>
    )

}


export default RootNavigation;