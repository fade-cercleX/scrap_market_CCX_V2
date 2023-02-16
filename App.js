import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Authenticated from "./navigation/Authenticated";
import AppNaigation from "./navigation/AppNavigation";
import { Provider } from "react-redux";
import store from './src/store/store'
import * as Font from "expo-font";
import { useNetInfo } from "@react-native-community/netinfo";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontloaded, setFontLoaded] = useState(false);
  const net = useNetInfo();
  const showSuccess = (text) => {
    Toast.show({
      position: "top",
      type: "success",
      text1: text,
      bottomOffset: 20,
    });
  };

  const showError = (text) => {
    Toast.show({
      position: "top",
      type: "error",
      text1: text,
      bottomOffset: 20,
    });
  };

  useEffect(() => {
    Font.loadAsync({
      circular: require("./assets/fonts/CircularStd-Book.otf"),
    })
      .then(() => {
        setFontLoaded(true);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  if (!fontloaded) return null;

  net.isConnected
    ? showSuccess("Back online")
    : showError("Oops Network Is Disconnected...");

  return (
    <Provider store={store}>
      <View style={{ height: "100%" }}>
        <AppNaigation />
        <Toast />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
