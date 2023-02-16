import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/color";
import { Bold } from "./Text";

export const Button = ({ name, onPress, style, children }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ ...styles.Btn, ...style }}
      onPress={onPress}
    >
      <Bold style={styles.BtnText}>{name ? name : children}</Bold>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({ name, onPress, style, children }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ ...styles.secondryBtn, ...style }}
      onPress={onPress}
    >
      <Bold style={styles.secondryBtnText}>{name ? name : children}</Bold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Btn: {
    borderRadius: 7,
    padding: 5,
    backgroundColor: "#6f2da8",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 18,
  },

  secondryBtn: {
    borderRadius: 7,
    padding: 5,
    backgroundColor: "#fff",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },

  BtnText: { color: "#fff", fontSize: 16 },
  secondryBtnText: {
    color: colors.primary,
    fontSize: 16,
    alignItems: "center",
  },
});
