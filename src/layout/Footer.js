import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "./Text";
import { colors } from "../styles/color";
import { style } from "../styles";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={{ ...style.center, ...style.mb_2 }}>
      <Text style={{ color: colors.primary }}>
        {" "}
        ANY waste, ANY where, ANY time!
      </Text>

      <View style={style.row}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("PrivacyPolicies")}
        >
          <Text style={{ color: colors.primary }}>View Privacy Policy</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity activeOpacity={1}
        onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <Text style={{ color: colors.primary }}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
      <Text> Infinite Cercle Private Limited (Cercle X)</Text>
      <Text> ©{new Date().getFullYear()}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
