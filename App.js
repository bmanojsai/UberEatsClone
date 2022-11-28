import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import RootNavigation from './navigation';

export default function App() {
  return (
  <RootNavigation />
  );
}

const styles = StyleSheet.create({
  
});
