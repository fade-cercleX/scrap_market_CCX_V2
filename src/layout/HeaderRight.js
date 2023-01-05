import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import { Ionicons } from "react-native-vector-icons";
import { style } from "../styles";
import { SemiBold, Text } from "./Text";
import { useNavigation } from "@react-navigation/native";

const HeaderRight = ()=>{
  const navigate = useNavigation()
    return (
      <View style={style.row}>
        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("Notifications")}
        >
          <Ionicons name="notifications-outline" size={27} />
        </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={()=> navigate.navigate('PurchaseCredits')}> 
        <View style={styles.credit}>
          <Image
            source={require("../../assets/images/credit.png")}
            style={styles.image_icon}
          />
          <SemiBold> 10</SemiBold>
        </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

const styles = StyleSheet.create({
  image_icon: {
    width: 24,
    height: 24,
  },
  credit:{
    backgroundColor:"rgba(249, 241, 255, 1)",
    flexDirection:"row",
    paddingHorizontal:8,
    paddingVertical:5,
    borderRadius:5,
    marginLeft:8,
    alignItems:"center"
  }
});

export default HeaderRight;
