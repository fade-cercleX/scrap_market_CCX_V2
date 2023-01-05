import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { style } from "../../styles";
import { colors } from "../../styles/color";
import { Text, Bold, SemiBold, GrayText } from "../../layout/Text";
import { AntDesign } from "react-native-vector-icons";

const HomeFooter = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={require("../../../assets/images/question-mark.png")}
        style={{ width: 40, height: 40 }}
      />
      <View style={{ width: "80%", ...style.ml_1 }}>
        <Bold>Having any queries?</Bold>
        <GrayText>
          Please contact our customer support. We always happy to help you.
        </GrayText>
        <View
          style={{ ...style.row, ...style.s_b, ...style.mv_2, ...style.mt_2 }}
        >
          <View style={styles.call_btn}>
            <Text style={{ color: colors.white }}>Call us</Text>
          </View>
          <View style={styles.write_btn}>
            <Text style={{ color: colors.primary }}>Write a message</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  write_btn: {
    backgroundColor: "#fff",
    borderRadius: 7,
    borderColor: colors.primary,
    borderWidth: 1,
    paddingHorizontal: 14,
    height: 50,
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
  },
  call_btn: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 14,
    height: 50,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    shadowColor: "rgba(255, 255, 255, 1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderColor: "gray",
    borderWidth: 0.1,

    elevation: 2,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 14,

    marginTop: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
export default HomeFooter;
