import React from "react";
import { View, StyleSheet } from "react-native";
import TabBar from "../layout/TabBar";
import Header from "../layout/Header";

const ControlApp = () => {
  return (
      <View style={{ flex: 1 }}>
        <Header />
        <TabBar />
      </View>
  );
};

const styles = StyleSheet.create({});
export default ControlApp;
