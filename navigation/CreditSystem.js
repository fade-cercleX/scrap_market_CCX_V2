import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PurchaseCredits from "../src/screens/credits/PurchaseCredits";
import Credits from "../src/screens/credits/Credits";
import { Bold } from "../src/layout/Text";

const CreditSystemStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Credits">
      <Stack.Screen
        name="PurchaseCredits"
        component={PurchaseCredits}
        options={() => ({ headerTitle: () => <Bold>Purchase Credits</Bold> })}
      />

      <Stack.Screen
        name="Credits"
        component={Credits}
        options={{ headerShown: false }}

      />
    </Stack.Navigator>
  );
};
export default CreditSystemStack;
