import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bold } from "../src/layout/Text";
import MetalsList from "../src/components/marketPrice/MetalsList";
import PriceHistory from "../src/screens/marketPrices/PriceHistory";
import Cities from "../src/screens/marketPrices/Cities";
import MarketPrice from "../src/screens/marketPrices/MarketPrice";

const MarketPriceStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="MarketPrice" >
      <Stack.Screen
        name="Cities"
        component={Cities}
        options={() => ({ headerTitle: () => <Bold>Cities</Bold> })}
      />

      <Stack.Screen
        name="matelsList"
        component={MetalsList}
        options={() => ({ headerTitle: () => <Bold>Cities</Bold> })}
      />

      <Stack.Screen
        name="MarketPrice"
        component={MarketPrice}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MarketPriceStack;
