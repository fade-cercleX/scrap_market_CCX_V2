import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/screens/auth/Login";
import ConfirmOTP from "../src/screens/auth/ConfirmOTP";
import PrivacyPolicies from "../src/screens/settings/PrivacyPolicies";
import IntroApp from "../src/screens/auth/IntroApp";
import Register from "../src/screens/auth/Register";
import ChangePassword from "../src/screens/auth/ChangePassword";
import TermsAndConditions from "../src/screens/settings/TermsAndCondations";

const UnAuthenticated = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="IntroApp"
        component={IntroApp}
        options={{ headerShown: false }}
        lazy
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
      <Stack.Screen
        name="PrivacyPolicies"
        component={PrivacyPolicies}
        options={{ headerShown: false }}
        lazy
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{ headerShown: false }}
        lazy
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticated;
