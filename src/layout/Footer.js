import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "./Text";
import { colors } from "../styles/color";
import { style } from "../styles";

const Footer = () => {
  return (
    <View style={{ ...style.center, ...style.mb_2 }}>
      <Text style={{ color: colors.primary }}>
        {" "}
        ANY waste, ANY where, ANY time!
      </Text>
      <View style={style.row}>
        <Text style={{ color: colors.primary }}>View Privacy Policy</Text>
        <Text> | </Text>
        <Text style={{ color: colors.primary }}>Terms & Conditions</Text>
      </View>
      <Text> Infinite Cercle Private Limited (Cercle X)</Text>
      <Text> ©{new Date().getFullYear()}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
