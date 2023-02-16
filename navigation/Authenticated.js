import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserProfile from "../src/screens/settings/UserProfile";
import ControlApp from "../src/components/ControlApp";
import PostScrap from "../src/screens/offers/PostNewScrap";
import { Bold } from "../src/layout/Text";
import SelectLocation from "../src/screens/settings/SelectLocation";
import MyActiveScaps from "../src/screens/settings/MyActiveScraps";
import MyActiveBids from "../src/screens/settings/MyActiveBids";
import ScrapsHistory from "../src/screens/settings/ScrapsHistory";
import BidsHistory from "../src/screens/settings/BidsHistory";
import MyLocations from "../src/screens/settings/MyLocations";
import Subscriptions from "../src/screens/settings/Subscriptions";
import PurchaseCredits from "../src/screens/credits/PurchaseCredits";
import Settings from "../src/screens/settings/Settings";
import EditUserProfile from "../src/screens/settings/EditProfile";
import ChangePassword from "../src/screens/auth/ChangePassword";
import NotificationSetting from "../src/screens/settings/NotificationsSettings";
import Notifications from "../src/screens/settings/Notifications";
import PostDetails from "../src/screens/offers/PostDetails";
import Cities from "../src/screens/marketPrices/Cities";
import AboutUs from "../src/screens/settings/AboutUs";
import IntroApp from "../src/screens/auth/IntroApp";
import HeaderRight from "../src/layout/HeaderRight";
import Login from "../src/screens/auth/Login";
import ConfirmOTP from "../src/screens/auth/ConfirmOTP";
import PrivacyPolicies from "../src/screens/settings/PrivacyPolicies";
import MetalsList from "../src/components/marketPrice/MetalsList";

const Authenticated = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="IntroApp"
        component={IntroApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={ControlApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={() => ({
          headerTitle: () => <Bold>My profile</Bold>,
          headerRight: () => <HeaderRight />,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={() => ({ headerTitle: () => <Bold>Settings</Bold> })}
      />
      <Stack.Screen
        name="MyActiveScraps"
        component={MyActiveScaps}
        options={() => ({ headerTitle: () => <Bold>My Active Scraps</Bold> })}
      />
      <Stack.Screen
        name="MyActiveBids"
        component={MyActiveBids}
        options={() => ({ headerTitle: () => <Bold>My Active Bids</Bold> })}
      />
      <Stack.Screen
        name="ScrapsHistory"
        component={ScrapsHistory}
        options={() => ({ headerTitle: () => <Bold>Scraps History</Bold> })}
      />
      <Stack.Screen
        name="BidsHistory"
        component={BidsHistory}
        options={() => ({ headerTitle: () => <Bold>Bids History </Bold> })}
      />
      <Stack.Screen
        name="MyLocations"
        component={MyLocations}
        options={() => ({ headerTitle: () => <Bold>My Locations</Bold> })}
      />
      <Stack.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={() => ({ headerTitle: () => <Bold>Subscriptions</Bold> })}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={() => ({ headerTitle: () => <Bold>Change Password</Bold> })}
      />
      <Stack.Screen
        name="EditUserProfile"
        component={EditUserProfile}
        options={() => ({ headerTitle: () => <Bold>Edit Profile</Bold> })}
      />
      <Stack.Screen
        name="NotificationSetting"
        component={NotificationSetting}
        options={() => ({
          headerTitle: () => <Bold>Notification Setting</Bold>,
        })}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={() => ({ headerTitle: () => <Bold>Notification </Bold> })}
      />

      <Stack.Screen
        name="PrivacyPolicies"
        component={PrivacyPolicies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={() => ({ headerTitle: () => <Bold>About Us</Bold> })}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={() => ({ headerTitle: () => <Bold>Post Details</Bold> })}
      />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({});
export default Authenticated;
