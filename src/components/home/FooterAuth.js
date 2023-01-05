import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "../../layout/Text";
import { style } from "../../styles";

const FooterAuth = () => {
  return (
    <View style={{ ...style.center, ...style.mb_2 }}>
      <Text style={{ color: colors.primary }}>
        {" "}
        ANY waste, ANY where, ANY time!
      </Text>
      <View style={style.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacyPolicies")}
        >
          <Text style={{ color: colors.primary }}>View Privacy Policy</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <Text style={{ color: colors.primary }}>Terms & Conditions</Text>
      </View>
      <Text> Infinite Cercle Private Limited (Cercle X)</Text>
      <Text> ©{new Date().getFullYear()}</Text>
    </View>
  );
};

export default FooterAuth;

const styles = StyleSheet.create({});
