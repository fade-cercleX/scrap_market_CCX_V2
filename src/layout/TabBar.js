import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import { colors } from "../styles/color";
import Offers from "../screens/offers/Offers";
import MarketPrice from "../screens/marketPrices/MarketPrice";
import Credits from "../screens/credits/Credits";

const TabBar = () => {
  const navigate = useNavigation();
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 5 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            width: "100%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
          tabBarInactiveTintColor: "#3A363E",
          tabBarActiveTintColor: "#6f2da8",
          tabBarActiveBackgroundColor: colors.secondary,
          tabBarVisibilityAnimationConfig: "1",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarBadgeStyle: { backgroundColor: "#222" },
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="offers"
          component={Offers}
          options={{
            tabBarBadgeStyle: { backgroundColor: "#F8EFFF" },
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="approval" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="market-price"
          component={MarketPrice}
          options={{
            tabBarBadgeStyle: { backgroundColor: "#F8EFFF" },
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="insights" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Credit"
          component={Credits}
          options={{
            tabBarBadgeStyle: { backgroundColor: "#F8EFFF" },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="star-circle"
                color={color}
                size={24}
              />
            ),
          }}
        />

        <Tab.Screen
          name="my-account"
          component={Home}
          options={{
            tabBarBadgeStyle: { backgroundColor: "#F8EFFF" },
            tabBarIcon: ({ color }) => (
              <TouchableWithoutFeedback
                onPress={() => navigate.navigate("UserProfile")}
              >
                <View style={styles.tabBarIcon}>
                  <FontAwesome5 name="user-alt" color={color} size={24} />
                </View>
              </TouchableWithoutFeedback>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TabBar;
