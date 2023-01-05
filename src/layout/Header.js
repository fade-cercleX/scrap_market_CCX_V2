import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../styles";
import { SemiBold, Bold, Text } from "./Text";  
import { useNavigation } from "@react-navigation/native";
import HeaderRight from "./HeaderRight";

const Header = () => {
 const navigate = useNavigation()
  return (
    <SafeAreaView>
      <View style={{ ...styles.header }}>
        <View style={{ ...style.row }}>
          <TouchableWithoutFeedback
            onPress={() => navigate.navigate("UserProfile")}
          >
            <Image
              source={require("../../assets/images/user.jpg")}
              style={style.usermage}
            />
          </TouchableWithoutFeedback>
          <View style={style.ml_1}>
            <Bold>Hi, Fade</Bold>
          </View>
        </View>
        <HeaderRight/> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical:10,
    backgroundColor:"#FCFBFC"
  },
});
export default Header;
