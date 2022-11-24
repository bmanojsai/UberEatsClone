import { View, Text} from 'react-native'
import React , {useEffect}from 'react'
import About from '../components/restaurantDetails/About';
import ImmersiveMode from 'react-native-immersive-mode';
import {Divider} from 'react-native-elements';

function RestaurantDetailsScreen() {
  useEffect(() => {
    ImmersiveMode.fullLayout(true);
    ImmersiveMode.setBarTranslucent(true);
  }, [])
  
  return (
    <View>
      <About />
      <Divider width = {1} />
    </View>
  )
}


export default  RestaurantDetailsScreen;