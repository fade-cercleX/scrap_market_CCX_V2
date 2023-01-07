import React from "react";
import Login from "../src/screens/auth/Login";
import ConfirmOTP from "../src/screens/auth/ConfirmOTP";
import PrivacyPolicies from "../src/screens/settings/PrivacyPolicies";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import IntroApp from "../src/screens/auth/IntroApp";
import Register from "../src/screens/auth/Register";
import ChangePassword from "../src/screens/auth/ChangePassword";

const UnAuthenticated = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="introApp"
          component={IntroApp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="ConfirmOTP"
          component={ConfirmOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};


export default UnAuthenticated