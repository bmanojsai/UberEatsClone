import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

function ViewCart({ navigation, restaurantName }) {
    const itemsIncart = useSelector((state) => state.CartRes.cartItems);
    
    const totalCost = itemsIncart.map((item) => Number(item.price.replace("$",""))).reduce((prev,curr) => prev+curr , 0);

  return (
    <View style = {{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        flexDirection : 'row',
        position : "absolute",
        bottom : 90,
        zIndex: 999
    }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 13,
            alignItems: "center",
            width: 300,
            borderRadius: 30,
            marginTop: 20,
            position: "relative",// dont know why i added :(
            flexDirection : "row",
            justifyContent : "space-around"
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>ViewCart</Text>
          <Text style = {{color : "white", fontSize : 20}}>${totalCost}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ViewCart;
