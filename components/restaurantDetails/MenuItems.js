import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FoodItem = ({ title, image, description, price }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 15,
        marginLeft : 20
      }}
    >
      <BouncyCheckbox iconStyle = {{borderColor : "#eee" }}  fillColor = "green" />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{title}</Text>
        <Text style={{ marginVertical: 5, fontSize: 13, fontWeight: "400" }}>
          {description}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>{price}</Text>
      </View>
      <View style={{ width: 100, height: 100, marginVertical: 10, borderRadius: 15 }}>
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
    </View>
  );
};

function MenuItems() {
  const items = [
    {
      title: "Chicken Tandoori",
      description:
        "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
      price: "$20",
    },
    {
      title: "Chicken Tandoori",
      description:
        "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
      price: "$20",
    },
    {
      title: "Chicken Tandoori",
      description:
        "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
      price: "$20",
    },
    {
      title: "Chicken Tandoori",
      description:
        "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
      price: "$20",
    },
    {
      title: "Chicken Tandoori",
      description:
        "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
      price: "$20",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
      {items.map((menuItem, index) => (
        <View key={index}>
          
          <FoodItem
            title={menuItem.title}
            description={menuItem.description}
            price={menuItem.price}
            image={menuItem.image}
          />
          <Divider width={0.5} orientation = {"vertical"} style = {{marginHorizontal : 15}} />
        </View>
      ))}
    </ScrollView>
  );
}

export default MenuItems;
