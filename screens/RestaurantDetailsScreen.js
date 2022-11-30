import { View, Text } from "react-native";
import React, { useEffect } from "react";
import About from "../components/restaurantDetails/About";
import ImmersiveMode from "react-native-immersive-mode";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import { useIsFocused } from "@react-navigation/native";
import reactotron from "reactotron-react-native";
import ViewCart from "../components/restaurantDetails/ViewCart";
import { useSelector } from "react-redux";
import { updateItemsInCart } from "../redux/slice";

function RestaurantDetailsScreen({ navigation, route }) {
  const isFocussedDetails = useIsFocused();
  const itemsIncart = useSelector((state) => state.CartRes.cartItems);
  // console.log("******", itemsIncart);

  useEffect(() => {
    if (isFocussedDetails) {
      ImmersiveMode.fullLayout(true);
      ImmersiveMode.setBarTranslucent(true);
      reactotron.log("executing in Details");
    }
  }, [isFocussedDetails]);

  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1} style={{ marginBottom: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      {itemsIncart.length > 0 ? (
        <ViewCart navigation={navigation} restaurantName={route.params.name} />
      ) : (
        <></>
      )}
    </View>
  );
}

export default RestaurantDetailsScreen;
