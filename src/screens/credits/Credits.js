import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { SecondaryButton } from "../../layout/Button";
import { Bold, SemiBold, Text } from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import CoinsCollapsible from "../../components/purchaseCredits/CoinsCollapsible";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../layout/Header";

const Credits = () => {
  const navigate = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <View style={style.screen}>
        <View style={{ ...styles.credit_box, ...style.mt_1 }}>
          <Image
            source={require("../../../assets/images/background.png")}
            style={styles.image}
          />
          <View style={styles.description}>
            <Image
              source={require("../../../assets/images/credit.png")}
              style={styles.credit_image}
            />
            <Bold style={{ color: colors.white, ...style.mv_1 }}>
              Free Welcome Credits
            </Bold>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Bold style={{ ...style.mr_1, color: colors.white }}>10/10</Bold>
              <Text
                style={{
                  color: colors.white,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                coins
              </Text>
            </View>
          </View>
        </View>
        <SemiBold style={style.mt_2}>Free Credits</SemiBold>
        <View style={{ ...styles.freeCreditBox }}>
          <View>
            <Text style={{ color: colors.primary }}>Posting Scraps</Text>
            <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
              <Text>5 Scraps</Text>
              <Text>1 coin </Text>
            </View>
            <View style={{ ...style.row, ...style.s_b }}>
              <Text>25 Scraps</Text>
              <Text>1 contact detail</Text>
            </View>
          </View>
        </View>
        <View style={style.mv_2}>
          <Bold>Coins Usage</Bold>
          <CoinsCollapsible />
        </View>
        <SecondaryButton onPress={() => navigate.navigate("PurchaseCredits")}>
          Buy Additional Credits
        </SecondaryButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 7,
    width: "100%",
  },
  credit_box: {
    backgroundColor: "#6f2da8",
    height: 160,
    borderRadius: 7,
  },
  description: {
    width: "100%",
    height: 160,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    top: 0,
    left: 0,
  },
  freeCreditBox: {
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 5,
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 10,
  },
  credit_image: {
    width: 65,
    height: 65,
  },
});
export default Credits;
