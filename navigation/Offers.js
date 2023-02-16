import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bold } from "../src/layout/Text";
import PostScrap from "../src/screens/offers/PostNewScrap";
import SelectLocation from "../src/screens/settings/SelectLocation";
import Offers from "../src/screens/offers/Offers";
// import

const OffersStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Offers">
      <Stack.Screen
        name="Offers"
        component={Offers}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="PostScrap"
        component={PostScrap}
        options={() => ({
          headerTitle: () => <Bold>Post Scraps</Bold>,
          headerRight: () => <HeaderRight />,
        })}
      /> */}
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={() => ({ headerTitle: () => <Bold>Post Details</Bold> })}
      />
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={() => ({ headerTitle: () => <Bold>Select Location</Bold> })}
      />
    </Stack.Navigator>
  );
};

export default OffersStack;
