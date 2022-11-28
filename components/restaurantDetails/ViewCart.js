import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

function ViewCart({ navigation, restaurantName }) {
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
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ViewCart;
