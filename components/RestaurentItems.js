import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GOOGLE_PLACES_API_KEY } from "@env";

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

const RestaurentImage = ({ restaurent }) => {
  return (
    <>
      {restaurent.image_id == "NO_PICS_AVAILABLE" ? (
        <Image
          source={require("../assets/images/blanckImg.jpg")}
          style={{ width: "100%", height: 180 }}
        />
      ) : (
        <Image
          //alter comments for real world workings
          //source={require("../assets/images/bg1.jpg")}
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxheight=180&photo_reference=${restaurent.image_id}&key=${GOOGLE_PLACES_API_KEY}`,
          }}
          style={{ width: "100%", height: 180 }}
        />
      )}

      <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const ReastaurentInfo = ({ restaurent }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 2,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              marginRight: 5,
              marginBottom: 2,
            }}
          >
            {restaurent.name}
          </Text>
          <Text
            style={{
              backgroundColor:
                restaurent.status == "Open" ? "#ACF3AE" : "#FA6B84",
              paddingHorizontal: 7,
              paddingVertical: 1,
              borderRadius: 15,
              fontSize: 12,
              marginBottom: 2,
            }}
          >
            {restaurent.status}
          </Text>
        </View>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 ･ min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 30,
          width: 32,
          height: 32,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{restaurent.rating}</Text>
      </View>
    </View>
  );
};

function RestaurentItems({ restaurentData }) {
  return (
    <>
      {restaurentData.map((restaurent, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 10 }}
          key={index}
        >
          <View style={{ marginTop: 5, padding: 15, backgroundColor: "white" }}>
            <RestaurentImage restaurent={restaurent} />
            <ReastaurentInfo restaurent={restaurent} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export { localRestaurents };
export default RestaurentItems;
