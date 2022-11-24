import { View, Text, Image } from "react-native";
import React from "react";

function About() {
  return (
    <View>
      <Image  source={require("../../assets/images/bg2.jpg")} style={{width : "100%", height : 190}}/>
      <Text style= {{fontSize : 26, fontWeight : "600", marginTop : 10, marginHorizontal : 15}}>Farm House Cousine And Restaurent</Text>
      <Text style = {{fontSize : 15, marginVertical : 10, marginHorizontal : 15}}>Thai ･ Comfort Food ･ $$ ･ 4 ⭐ (2134+)</Text>
    </View>
  );
}

export default About;
