import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, SemiBold } from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home/Home";
import MetalsList from "../../components/marketPrice/MetalsList";

const Tab = createMaterialTopTabNavigator();

const MarketPrice = () => {
  const navigate = useNavigation();
  const data = [1, 5, 4, 7, 7, 8, 7];
  const renderItem = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigate.navigate("Cities")}>
        <View style={styles.renderItem}>
          <View style={style.row}>
            <Image
              source={require("../../../assets/images/user.jpg")}
              style={styles.image}
            />
            <View style={style.ml_1}>
              <SemiBold style={{ color: colors.primary }}>
                Metal Scraps
              </SemiBold>
              <Text>List of major metal scraps</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View
      style={{ height: "100%", paddingHorizontal: 6, backgroundColor: "#fff" }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            // width:"auto",
            width: 95,
            paddingHorizontal: 1,
          },
        }}
        tabBarOptions={{
          activeTintColor: "#fff",
          labelStyle: {
            textTransform: "uppercase",
          },

          inactiveTintColor: colors.black,
          indicatorStyle: {
            height: null,
            top: "0%",
            bottom: "0%",
            right: "0%",
            left: "0%",
            borderRadius: 30,
            backgroundColor: "#6f2da8",
          },
          style: {
            alignSelf: "center",
            width: "100%",
            borderRadius: 30,
            shadowColor: "rgba(230,230,230,0.025)",
            shadowOpacity: 1.9,
            elevation: 1,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            marginBottom: 10,
          },
          tabStyle: {
            borderRadius: 100,
          },
        }}
        swipeEnabled={true}
        style={{ paddingVertical: 15, backgroundColor: "#f7f7f7" }}
      >
        <Tab.Screen name="All" component={MetalsList} />
        <Tab.Screen name="Metall" component={MetalsList} />
        <Tab.Screen name="Plastics" component={MetalsList} />
        <Tab.Screen name="paper" component={MetalsList} />
        <Tab.Screen name="plastics3" component={MetalsList} />
        <Tab.Screen name="plastics2" component={MetalsList} />
        <Tab.Screen name="plastics1" component={MetalsList} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    flexDirection: "row",
    borderRadius: 7,
    borderColor: "rgba(249, 241, 255, 1)",
    borderWidth: 1,
    height: 50,
    marginVertical: 6,
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    paddingHorizontal: 2,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 7,
  },
});
export default MarketPrice;
