import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { updateItemsInCart } from "../../redux/slice";

const FoodItem = ({ title, image, description, price ,restaurantName}) => {
  const dispatch = useDispatch();
  const itemsIncart = useSelector((state) => state.CartRes.cartItems);
  

  function isItemINCart(){
    const newList = itemsIncart.filter((item) => item.title == title && item.restaurantName == restaurantName);
    console.log("&&&&&&&&",itemsIncart, itemsIncart.length);
    return newList.length;
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 15,
        marginLeft: 20,
      }}
    >
      <BouncyCheckbox iconStyle={{ borderColor: "#eee" }} fillColor="green" onPress={(checkboxValue) => dispatch(updateItemsInCart({ food :{ title, image, description, price ,restaurantName},checkboxValue}))}  isChecked = {isItemINCart()} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{title}</Text>
        <Text style={{ marginVertical: 5, fontSize: 13, fontWeight: "400" }}>
          {description}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>{price}</Text>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          marginVertical: 10,
          borderRadius: 15,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
    </View>
  );
};

function MenuItems({restaurantName}) {
  const items = [
    {
      title: "Chicken Tandoori",
      description:
        "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
      price: "$19.99",
    },
    {
      title: "Grilled Chicken Escalope with Fresh Salsa",
      description:
        "Chicken marinated in home-made spice powder and green paste. Grilled to perfection and served with a fresh salsa of grapes, spring onion and cherry tomatoes.",
      image:
        "https://www.simplyrecipes.com/thmb/WXzv7XkTQvFEpYnyyk4x5HRMtVc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Horizontal-1b86ef1e115444ba8b6fb216f2810c7c.jpg",
      price: "$17.98",
    },
    {
      title: " Mutton Korma",
      description:
        "A flavourful mutton curry, where the meat is stirred with curd, garlic-ginger paste, cloves, cardamom and cinnamon sticks.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVlKjw-4lSfdbyFl79gqxf0jwWa4mI8E7SQ&usqp=CAU",
      price: "$20.00",
    },
    {
      title: " Pina Colada Pork Ribs",
      description:
        "The ingredients of the popular rum-based cocktail team up with pork ribs to create a lip-smacking treat.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzr-U5Zt6Wx9ioN4trA2lAuy8ADWLJyLYiA&usqp=CAU",
      price: "$15.99",
    },
    {
      title: "Tandoori Lamb Chops",
      description:
        "Lamb chops marinated in strained yogurt and flavoursome masalas. Cooked till tender, this dish is guaranteed to impress.",
      image:
        "https://www.homemadeinterest.com/wp-content/uploads/2022/08/Grilled-Lamb-Chops-in-a-Curry-Marinade_IG-1.jpg",
      price: "$23.45",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {items.map((menuItem, index) => (
        <View key={index}>
          <FoodItem
            title={menuItem.title}
            description={menuItem.description}
            price={menuItem.price}
            image={menuItem.image}
            restaurantName = {restaurantName}
          />
          <Divider
            width={0.5}
            orientation={"vertical"}
            style={{ marginHorizontal: 15 }}
          />
        </View>
      ))}
      <View style = {{height : 150}}></View>
    </ScrollView>
  );
}

export default MenuItems;
