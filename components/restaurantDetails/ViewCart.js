import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../../config/firebaseConfig";

const OrderItem = ({ title, price }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#999",
        borderBottomWidth: 1,
        padding: 15,
        width: "100%",
        margin: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      </View>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
};

const SubTotal = ({ totalCost }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#999",
        borderBottomWidth: 1,
        padding: 15,
        width: "100%",
        margin: 10,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>Sub Total</Text>

      <Text style={{ opacity: 0.7, fontSize: 16 }}>${totalCost}</Text>
    </View>
  );
};

function ViewCart({ navigation, restaurantName }) {
  const [modalVisible, setModalVisible] = useState(false);
  const itemsIncart = useSelector((state) => state.CartRes.cartItems);

  const totalCost = itemsIncart
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const addOrderToFirebase = async () => {
    // below steps to add data to firebase is taking very much time. so i commented it out
    // const db = firebase.firestore();
    // try {
    //   let response = await db.collection("orders").add({
    //     items: itemsIncart,
    //     restaurantName: restaurantName,
    //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   });

    //   console.log("response", response);
    // } catch (err) {
    //   console.log("errorr", err);
    // }

    setModalVisible(false);
    console.log("This is sss");
    navigation.navigate("OrderCompleted", {restaurantName : restaurantName});
  };

  const checkoutModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 500,
            padding: 16,
            borderWidth: 1,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                marginVertical: 10,
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {restaurantName}
            </Text>
            {itemsIncart.map((item, index) => (
              <OrderItem key={index} title={item.title} price={item.price} />
            ))}
            <SubTotal totalCost={totalCost} />
          </View>
          <View
            style={{
              backgroundColor: "black",
              padding: 13,
              borderRadius: 30,
              width: 200,
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              onPress={() => addOrderToFirebase()}
            >
              <Text style={{ color: "white" }}>Checkout</Text>
              <Text style={{ color: "white" }}>${totalCost}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 90,
          zIndex: 999,
        }}
      >
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
              position: "relative", // dont know why i added :(
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>ViewCart</Text>
            <Text style={{ color: "white", fontSize: 20 }}>${totalCost}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default ViewCart;
