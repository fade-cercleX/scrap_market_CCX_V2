import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SemiBold, Bold } from "../src/layout/Text";
const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
      <Stack.Navigator></Stack.Navigator>
  );
};

export default Settings;
