import { View, Text, ScrollView, PermissionsAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";
import axios from "axios";
import { GOOGLE_PLACES_API_KEY } from "@env";
import reactotron from "reactotron-react-native";

import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurentItems from "../components/home/RestaurentItems";
import BottomTabs from "../components/home/BottomTabs";

import { Divider } from "react-native-elements";
import ImmersiveMode from "react-native-immersive-mode";
import { useIsFocused } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState({});
  const [fullPlacesData, setFullPLacesData] = useState([]);
  const [restaurantData, setrestaurantData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [searchCity, setSearchCity] = useState(" ");
  const [activeTab, setActiveTab] = useState("Restaurant");
  const isFocussedHome = useIsFocused();

  useEffect(() => {
    if (isFocussedHome) {
      ImmersiveMode.fullLayout(false);
      ImmersiveMode.setBarTranslucent(false);
      reactotron.log("executing in Home");
    }
  }, [isFocussedHome]);

  const dummyplacesData = [
    {
      business_status: "CLOSED_PERMANENTLY",
      geometry: {
        location: { lat: -33.8587323, lng: 151.2100055 },
        viewport: {
          northeast: { lat: -33.85739847010727, lng: 151.2112436298927 },
          southwest: { lat: -33.86009812989271, lng: 151.2085439701072 },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
      icon_background_color: "#FF9E67",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
      name: "Cruise Bar",
      opening_hours: { open_now: false },
      photos: [
        {
          height: 608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/112582655193348962755">A Google User</a>',
          ],
          photo_reference:
            "Aap_uECvJIZuXT-uLDYm4DPbrV7gXVPeplbTWUgcOJ6rnfc4bUYCEAwPU_AmXGIaj0PDhWPbmrjQC8hhuXRJQjnA1-iREGEn7I0ZneHg5OP1mDT7lYVpa1hUPoz7cn8iCGBN9MynjOPSUe-UooRrFw2XEXOLgRJ-uKr6tGQUp77CWVocpcoG",
          width: 1080,
        },
      ],
      place_id: "ChIJi6C1MxquEmsR9-c-3O48ykI",
      plus_code: {
        compound_code: "46R6+G2 The Rocks, New South Wales",
        global_code: "4RRH46R6+G2",
      },
      price_level: 2,
      rating: 4,
      reference: "ChIJi6C1MxquEmsR9-c-3O48ykI",
      scope: "GOOGLE",
      types: [
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment",
      ],
      user_ratings_total: 1269,
      vicinity:
        "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: { lat: -33.8675219, lng: 151.2016502 },
        viewport: {
          northeast: { lat: -33.86614532010728, lng: 151.2031259298927 },
          southwest: { lat: -33.86884497989272, lng: 151.2004262701072 },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      icon_background_color: "#7B9EB0",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      name: "Sydney Harbour Dinner Cruises",
      opening_hours: { open_now: true },
      photos: [
        {
          height: 835,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/109764923610545394994">A Google User</a>',
          ],
          photo_reference:
            "Aap_uEBVsYnNcrpRixtrlHBztigZh70CwYkNWZzQnqJ39SjeBo_wvgKf-kXc6tgaMLBdQrRKmxmSKjOezoZrv-sHKVbTX0OI48HBqYYVnQiZQ-WGeuQDsLEPwX7LaVPa68nUAxX114Zpqt7bryoO9wL4qXdgEnopbOp5WWLALhKEHoIEH7f7",
          width: 1200,
        },
      ],
      place_id: "ChIJM1mOVTS6EmsRKaDzrTsgids",
      plus_code: {
        compound_code: "46J2+XM Sydney, New South Wales",
        global_code: "4RRH46J2+XM",
      },
      rating: 4.8,
      reference: "ChIJM1mOVTS6EmsRKaDzrTsgids",
      scope: "GOOGLE",
      types: [
        "tourist_attraction",
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment",
      ],
      user_ratings_total: 9,
      vicinity: "32 The Promenade, Sydney",
    },
    {
      business_status: "CLOSED",
      geometry: {
        location: { lat: -33.8676569, lng: 151.2017213 },
        viewport: {
          northeast: { lat: -33.86629922010728, lng: 151.2031712798927 },
          southwest: { lat: -33.86899887989272, lng: 151.2004716201073 },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      icon_background_color: "#7B9EB0",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      name: "Clearview Sydney Harbour Cruises",
      opening_hours: { open_now: false },
      photos: [
        {
          height: 685,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114394575270272775071">Clearview Glass Boat Cruises</a>',
          ],
          photo_reference:
            "Aap_uEAlExjnXA0VWyb_oYwCJ8utWG_Ennhwmn_xadpgenMNUgTuxrvgf1Xdw4bsbL6kFSWH7bhbpVHK1esdNY37ancJvbL_Gnsc7EZ5KEBNPvYZ_ZEyLco4a5v34LFkodxfFZbJ-ejO3zN4W_0C37P5jAmTnLWMNFYUPvoU3UMi70qHRNF5",
          width: 1024,
        },
      ],
      place_id: "ChIJNQfwZTiuEmsR1m1x9w0E2V0",
      plus_code: {
        compound_code: "46J2+WM Sydney, New South Wales",
        global_code: "4RRH46J2+WM",
      },
      rating: 3.8,
      reference: "ChIJNQfwZTiuEmsR1m1x9w0E2V0",
      scope: "GOOGLE",
      types: [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment",
      ],
      user_ratings_total: 49,
      vicinity: "32 The Promenade King Street Wharf 5, Sydney",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: { lat: -33.8677035, lng: 151.2017297 },
        viewport: {
          northeast: { lat: -33.86634597010728, lng: 151.2031781298927 },
          southwest: { lat: -33.86904562989272, lng: 151.2004784701072 },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      icon_background_color: "#7B9EB0",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      name: "Sydney Harbour Lunch Cruise",
      opening_hours: { open_now: false },
      photos: [
        {
          height: 545,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102428257696490257922">Sydney Harbour Lunch Cruise</a>',
          ],
          photo_reference:
            "Aap_uEBFyQ2xDzHk7dGF_FTvNeJ01NQD6GROq89rufdGQl5Gi0zVfpnETBjPK2v7UEDl_6F-m8aR5FcEWJMqPaH4Oh_CQh2jaUAUAesUInucpCe7OFdleSYJ_8kgunhsIvGf1D1s_pes6Rk2JMVEs8rEs6ZHSTmUQXX2Yh-Gt9MuPQdYNuNv",
          width: 969,
        },
      ],
      place_id: "ChIJUbf3iDiuEmsROJxXbhYO7cM",
      plus_code: {
        compound_code: "46J2+WM Sydney, New South Wales",
        global_code: "4RRH46J2+WM",
      },
      rating: 3.9,
      reference: "ChIJUbf3iDiuEmsROJxXbhYO7cM",
      scope: "GOOGLE",
      types: [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment",
      ],
      user_ratings_total: 23,
      vicinity: "5/32 The Promenade, Sydney",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: { lat: -33.8675883, lng: 151.2016452 },
        viewport: {
          northeast: { lat: -33.86623847010728, lng: 151.2029950298927 },
          southwest: { lat: -33.86893812989273, lng: 151.2002953701073 },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      icon_background_color: "#7B9EB0",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      name: "Sydney Showboats - Dinner Cruise With Show",
      opening_hours: { open_now: false },
      photos: [
        {
          height: 4912,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105311284660389698992">A Google User</a>',
          ],
          photo_reference:
            "Aap_uED1aGaMs8xYfiuzeBqVcFsk3yguUujdE4S3rNThMpLtoU0RukF40KCt0CAxgHP1HoY8Z7NYcWvax6qmMMVPBbmzGhoaiwiAAyv2GGA9vhcgsJ5w0LweT0y1lgRGZxU3nZIdNLiYAp9JHM171UkN04H6UqYSxKVZ8N_f2aslkqOaBF_e",
          width: 7360,
        },
      ],
      place_id: "ChIJjRuIiTiuEmsRCHhYnrWiSok",
      plus_code: {
        compound_code: "46J2+XM Sydney, New South Wales",
        global_code: "4RRH46J2+XM",
      },
      rating: 4.1,
      reference: "ChIJjRuIiTiuEmsRCHhYnrWiSok",
      scope: "GOOGLE",
      types: [
        "travel_agency",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment",
      ],
      user_ratings_total: 119,
      vicinity: "32 The Promenade, King Street Wharf, 5, Sydney",
    },
  ];

  //On App loades, get current location of user(may be in lat, long)
  //convert them to name
  //searh for near restaurents in that location name

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Geolocation Permission",
          message: "Can we access your location?",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      console.log("granted", granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use Geolocation");
        return true;
      } else {
        console.log("You cannot use Geolocation");
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getUserLocationInLatLong = (searchCity) => {
    let result = requestLocationPermission();

    result
      .then(() => {
        if (searchCity === " ") {
          Geolocation.getCurrentPosition(
            (position) => {
              console.log(
                position,
                position.coords.latitude,
                position.coords.longitude
              );
              setrestaurantData([]);
              setBarData([]);
              setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        } else {
          //convert user string to lat and long
          Geocoder.from(searchCity)
            .then((json) => {
              var location1 = json.results[0].geometry.location;
              console.log("*-*-*-*", location1);
              setrestaurantData([]);
              setBarData([]);
              setLocation(location1);
            })
            .catch((error) => console.warn(error.origin));
        }
      })
      .catch((error) => console.log(error));
  };

  const getPlacesNearLocation = async () => {
    if (location.lat && location.lng) {
      var config = {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
          location.lat
        }%2C${
          location.lng
        }&radius=1500&type=${activeTab.toLocaleLowerCase()}&key=${GOOGLE_PLACES_API_KEY}`,
        headers: {},
      };

      try {
        reactotron.log(activeTab, restaurantData, barData);
        if (activeTab == "Restaurant" && restaurantData.length == 0) {
          const placesData = await axios(config);
          console.log("********", placesData.data.results);
          setFullPLacesData(placesData.data.results);
          reactotron.log("Active Restaurant && []");
        } else if (activeTab == "Bar" && barData.length == 0) {
          const placesData = await axios(config);
          console.log("********", placesData.data.results);
          setFullPLacesData(placesData.data.results);
          reactotron.log("Active Bar && []");
        } else {
          //since data is alreacy present, no need to fetch again
          //since location changed , we need to  fetch new data and show the feed
          // const placesData = await axios(config);
          // console.log("********", placesData.data.results);
          // setFullPLacesData(placesData.data.results);
          // reactotron.log("different locations");
          reactotron.log("Nothing is happening");
        }
      } catch (error) {
        console.log("error while getting places", error);
      }
    }
   
  };

  const filterplacesData = () => {
    // const availableRestaurents = dummyplacesData.filter(
    //   (res) => res.business_status !== "CLOSED_PERMANENTLY"
    // );
    //change comments for real world workings
    const availableRestaurents = fullPlacesData.filter(
      (res) => res.business_status !== "CLOSED_PERMANENTLY"
    );

    const properplacesData = availableRestaurents.map((res) => {
      return {
        name: res.name,
        rating: res.rating ? res.rating : "-",
        categories: res.types,
        image_id: res.photos
          ? res.photos[0].photo_reference
          : "NO_PICS_AVAILABLE",
        status: res.business_status == "OPERATIONAL" ? "Open" : "Closed",
        reviews: res.user_ratings_total,
        location: res.vicinity,
      };
    });

    if (activeTab === "Restaurant") {
      setrestaurantData(properplacesData);
    } else {
      setBarData(properplacesData);
    }
  };

  useEffect(() => {
   getUserLocationInLatLong(searchCity);
  }, [searchCity]);

  useEffect(() => {
    //costs for every api call--> so use carefully
    //also costs for every search, every image loading
    getPlacesNearLocation();
  }, [location, activeTab]);

  useEffect(() => {
    filterplacesData();
  }, [fullPlacesData]);

  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white" }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setSearchCity={setSearchCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurentItems
          restaurantData={activeTab === "Restaurant" ? restaurantData : barData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </View>
  );
}
