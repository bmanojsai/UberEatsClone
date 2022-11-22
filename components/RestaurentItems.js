import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localRestaurents = [
  {
    name: "FarmHouse Kitchen Thai Cusine",
    image_url: require("../assets/images/bg1.jpg"),
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 0,
    rating: 4.5,
  },
  {
    name: "FarmHouse Kitchen Thai Cusine",
    image_url: require("../assets/images/bg1.jpg"),
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 0,
    rating: 4.5,
  },
  {
    name: "FarmHouse Kitchen Thai Cusine",
    image_url: require("../assets/images/bg1.jpg"),
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 0,
    rating: 4.5,
  },
];

const RestaurentImage = ({restaurent}) => {
  return (
    <>
      <Image
        source={restaurent.image_url}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const ReastaurentInfo = ({restaurent}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "800" }}>
          {restaurent.name}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 ･ min</Text>
      </View>
      <View style={{ backgroundColor: "#eee", borderRadius: 30, width : 32, height: 32, alignItems : "center", justifyContent : "center" }}>
        <Text>
            {restaurent.rating}
        </Text>
      </View>
    </View>
  );
};

function RestaurentItems({restaurentData}) {
  return (
    <>
      {restaurentData.map((restaurent, index) => (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }} key = {index}>
          <View style={{ marginTop: 5, padding: 15, backgroundColor: "white" }}>
            <RestaurentImage restaurent= {restaurent} />
            <ReastaurentInfo restaurent = {restaurent} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export {localRestaurents};
export default RestaurentItems;
