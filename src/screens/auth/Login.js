import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import { style } from "../../styles/index";
import { Text, SemiBold, Bold } from "../../layout/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../layout/Button";
import { colors } from "../../styles/color";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
const { width, height } = Dimensions.get("window");

const Login = () => {
  const navigation = useNavigation();
  const phoneInput = useRef(PhoneInput);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  return (
    <SafeAreaView>
      <ScrollView style={{ ...style.screen, ...style.pt_2 }}>
        <View style={styles.authScreen}>
          <View style={{ ...style.center, ...style.form }}>
            <Image
              source={require("../../../assets/images/appLogo.png")}
              style={style.appLogo}
            />
            <View style={{ ...style.form, ...style.mt_2 }}>
              <View style={styles.inputText}>
                <PhoneInput
                  keyboardType="numeric"
                  maxLength={13}
                  ref={phoneInput}
                  defaultValue={userPhoneNumber}
                  defaultCode="IN"
                  autoFocus
                  containerStyle={{ height: 54 }}
                  flagButtonStyle={{ borderRadius: 9 }}
                  onChangeFormattedText={(text) => console.log(text)}
                />
              </View>
              <Button onPress={() => navigation.navigate("Home")}>
                Request OTP
              </Button>
              <View style={style.row}>
                <Text>Don't have an account? </Text>
                <Text style={{ color: colors.primary }}>Register</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  authScreen: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: height - 30,
  },
  inputText: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 7,
    height: 57,
  },
});
