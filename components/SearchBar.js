import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import IoniCons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchBar() {
  return (
    <View
      style={{ marginVertical: 15, marginHorizontal: 10, flexDirection: "row" }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center"
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 5 }}>
            <IoniCons name="location-sharp" size={23} />
          </View>
        )}

        renderRightButton = {() => (
            <View style = {{flexDirection : "row", backgroundColor : 'white', paddingVertical: 8,paddingHorizontal : 13 , borderRadius : 20, marginRight : 10 , alignItems : "center"}}>
                <AntDesign name= "clockcircle" size = {15} style = {{ marginRight : 6 }}/>
                <Text >search</Text>
            </View>)
        }
      />
    </View>
  );
}

export default SearchBar;
