import React from "react";
import { View, StyleSheet } from "react-native";
import ScrapsList from "../../components/ScrapsList";
import { style } from "../../styles";
const ScrapsHistory = () => {
  return (
    <View style={style.screen} >
      <ScrapsList />
    </View>
  );
};

const styles = StyleSheet.create({})
export default ScrapsHistory