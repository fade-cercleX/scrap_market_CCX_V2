import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, SemiBold, Bold } from "../../layout/Text";
import { style } from "../../styles";
import { colors } from "../../styles/color";
import { Ionicons } from "react-native-vector-icons";

const StatusCard = () => {
  return (
    <View style={{ ...style.row, ...style.s_b, ...style.mv_2 }}>
      <View style={styles.box}>
        <View style={style.row}>
          <View style={styles.icon}>
            <Image
              source={require("../../../assets/images/bids.png")}
              style={styles.icons_image}
            />
          </View>
          <SemiBold style={{ colors: colors.green }}> Your Bids</SemiBold>
        </View>
        <View style={{ ...style.row, ...style.mt_1 }}>
          <Text>On Selling:</Text>
          <Text style={{ color: colors.orange }}> 4 scraps</Text>
        </View>
        <View style={style.row}>
          <Text>On Buying :</Text>
          <Text style={{ color: colors.orange }}> 2 scraps</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={style.row}>
          <Ionicons
            name="checkmark-done-circle"
            color={colors.green}
            size={24}
          />
          <SemiBold> Completed</SemiBold>
        </View>
        <View style={{ ...style.row, ...style.mt_1 }}>
          <Text>On Selling:</Text>
          <Text style={{ color: colors.green }}> 4 scraps</Text>
        </View>
        <View style={style.row}>
          <Text>On Buying: </Text>
          <Text style={{ color: colors.green }}> 2 scraps</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor:"#f7f7f7",
    borderWidth:0.8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 7,
    width: "48%",
    shadowColor:colors.gray,
    shadowOpacity:0.1,
    elevation:0.5,
    shadowOffset:{ 
      width:0,
      height:1
    },
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6f2da8",
    flexDirection: "column",
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  icons_image: {
    width: 20,
    height: 20,
  },
});
export default StatusCard;
