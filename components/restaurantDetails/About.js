import { View, Text, Image } from "react-native";
import React from "react";
import {GOOGLE_PLACES_API_KEY} from "@env";

function About({route}) {

  const {name, rating, categories, image_id,reviews } = route.params;
  const categoriesFormat = categories.join("  ･  ");

  return (
    <View>
      {image_id == "NO_PICS_AVAILABLE" ? (
        <Image
          source={require("../../assets/images/bg1.jpg")}
          style={{ width: "100%", height: 180 }}
        />
      ) : (
        <Image
          //alter comments for real world workings
          //source={require("../../assets/images/bg1.jpg")}
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxheight=180&photo_reference=${image_id}&key=${GOOGLE_PLACES_API_KEY}`,
          }}
           style={{ width: "100%", height: 180 }}
        />
      )}
      <Text
        style={{
          fontSize: 26,
          fontWeight: "600",
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        {name}
      </Text>
      <Text style={{ fontSize: 15, marginVertical: 10, marginHorizontal: 15, lineHeight : 18 }}>
        {`${categoriesFormat}  ･  ${rating} ⭐  ･  (${reviews}+)`}
      </Text>
    </View>
  );
}

export default About;
