import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { style } from "../../styles/index";
import { EvilIcons, MaterialIcons ,Feather } from "react-native-vector-icons";
import { colors } from "../../styles/color";
import { Button } from "../../layout/Button";
import { GrayText ,Bold,SemiBold ,Text as Txt } from "../../layout/Text";

const ScrapDetails = () => {
  return (
    <View>
      
      <View style={{...style.mb_2}}>

        <SemiBold>Copper Wires</SemiBold>
        <View style={{...style.row,...style.s_b}} >
            <Txt>20 tonnes</Txt>
            <View style={{...style.row}}>
          <SemiBold>₹789</SemiBold><Txt>/kg</Txt></View>
        </View>
      </View>

      <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
        <View style={{ ...style.row }}>
          <EvilIcons name="location" color={colors.primary} size={28} />
          <Text>&nbsp;Location:</Text>
        </View>
        <Text>Tamil Nadu</Text>
      </View>

      <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
        <View style={{ ...style.row }}>
        <Feather name="truck" size={20} color={colors.primary} />
          <Text>&nbsp;Transport:</Text>
        </View>
        <Text>Available</Text>
      </View>

      <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
        <View style={{ ...style.row }}>
          <MaterialIcons name="domain" color={colors.primary} size={28} />
          <Text>&nbsp;Site Visiting:</Text>
        </View>
        <Text>Available</Text>
      </View>

      <Button>Post a bid to buy</Button>

      <Text style={{ color: colors.gray, textAlign: "center" }}>
        If seller accepts your bid on this scrap, you can able to view their
        contact details by using 5 coins.
      </Text>
    </View>
  );
};

export default ScrapDetails;

const styles = StyleSheet.create({});
