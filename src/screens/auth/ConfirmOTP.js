import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { style } from "../../styles/index";
import { Text, SemiBold, Bold } from "../../layout/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../layout/Button";
import { colors } from "../../styles/color";

const { width, height } = Dimensions.get("window");

const ConfirmOTP = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ ...style.screen, ...style.pt_2 }}>
        <View style={styles.authScreen}>
          <View style={style.center}>
            <Image
              source={require("../../../assets/images/appLogo.png")}
              style={style.appLogo}
            />
            <View style={{ ...style.form, ...style.mt_2 }}>
              <TextInput placeholder="Enter OTP" style={style.inputText} />
              <Button>Confirm OTP</Button>
            </View>
          </View>

          <View style={{ ...style.center, ...style.mb_2 }}>
            <Text style={{ color: colors.primary }}>
              {" "}
              ANY waste, ANY where, ANY time!
            </Text>
            <View style={style.row}>
              <Text style={{ color: colors.primary }}>View Privacy Policy</Text>
              <Text> | </Text>
              <Text style={{ color: colors.primary }}>Terms & Conditions</Text>
            </View>
            <Text> Infinite Cercle Private Limited (Cercle X)</Text>
            <Text> ©{new Date().getFullYear()}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmOTP;

const styles = StyleSheet.create({
  authScreen: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: height - 30,
  },
});
