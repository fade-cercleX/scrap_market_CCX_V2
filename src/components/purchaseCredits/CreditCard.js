import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SemiBold, Text, Bold } from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import {MaterialIcons} from 'react-native-vector-icons'

const CreditCard = () => {
  return (
    <View style={styles.crad}>
      <Image
        source={require("../../../assets/images/background.png")}
        style={styles.image_bg}
      />
      <View style={{ ...style.row, ...styles.content }}>
        <Image source={require("../../../assets/images/credit.png")} style={styles.credit_image} />
        <View style={{ width: "80%", ...style.ml_1 }}>
          <SemiBold style={{ color: colors.white }}>Free Welcome Credits</SemiBold>
          <Text style={style.row}>
            <Bold style={{ color: colors.white, ...style.mr_1}}>10/10 </Bold>
            <Text style={{ color: colors.white }}>coins</Text>
          </Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  crad: {
    backgroundColor: "#6f2da8",
    height: 130,
    borderRadius: 7,
    marginVertical: 20,
    width:"100%",
  },
  image_bg: {
    width: "100%",
    height: "80%",
    borderRadius: 7,
  },
  content: {
    position: "absolute",
    justifyContent: "center",
    height: "100%",
    marginLeft:15
  },
  credit_image:{
    width:65,
    height:65
  }
});
export default CreditCard;
