import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick Up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

function Categories() {
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {{
        backgroundColor : "white",
        marginTop : 5,
        paddingVertical : 3
    }}>
      {items.map((item, index) => (
        <View style={{ marginHorizontal: 15, alignItems: "center" }} key={index}>
          <Image
            source={item.image}
            style={{ width: 40, height: 50, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 13, fontWeight: "700" }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

export default Categories;
