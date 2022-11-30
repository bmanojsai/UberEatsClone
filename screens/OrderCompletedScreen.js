//need to implement a login to clear the redux cart Items once i showed this page.
//and also I didn't got the order items from firebase, insted i got it from redux
//so there is no need of loading screen and hence i am not implementing it NOW!!!
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import ImmersiveMode from "react-native-immersive-mode";
import AnimatedLottieView from "lottie-react-native";
import { FoodItem } from "../components/restaurantDetails/MenuItems";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function OrderCompletedScreen({ navigation, route }) {
  const itemsIncart = useSelector((state) => state.CartRes.cartItems);
  const isFocussedCompleted = useIsFocused();

  useEffect(() => {
    if (isFocussedCompleted) {
      ImmersiveMode.fullLayout(false);
      ImmersiveMode.setBarTranslucent(false);
    }
  }, [isFocussedCompleted]);



  const totalCost = itemsIncart
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <View style={{ flex: 1 , backgroundColor : "white"}}>
      <AnimatedLottieView
        style={{ height: 100, alignSelf: "center", marginVertical: 20 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop = {false}
      />
      <Text style = {{fontSize : 22, fontWeight : "500", marginHorizontal : 15, marginVertical: 10}}>
        Your Order at {route.params.restaurantName} has been placed for $
        {totalCost}
      </Text>

      <ScrollView style = {{flex : 1}}>
      {itemsIncart.map((menuItem, index) => (
        <View key={index}>
          <FoodItem
            title={menuItem.title}
            description={menuItem.description}
            price={menuItem.price}
            image={menuItem.image}
            restaurantName = {route.params.restaurantName}
            hideCheckbox = {true}
          />
          <Divider
            width={0.5}
            orientation={"vertical"}
            style={{ marginHorizontal: 15 }}
          />
        </View>
      ))}
      </ScrollView>
      

      <AnimatedLottieView
        style={{ height: 200, alignSelf: "center",marginBottom : 30 }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
        loop = {true}
      />
    </View>
  );
}
