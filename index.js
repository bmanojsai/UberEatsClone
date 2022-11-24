if(__DEV__) {
    import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }

import { registerRootComponent } from 'expo';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_PLACES_API_KEY } from "@env";
Geocoder.init(GOOGLE_PLACES_API_KEY, {language : "en"});

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
