import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { style } from "../../styles";
import { Text } from "../../layout/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/color";
import { Button } from "../../layout/Button";
import Footer from "../../layout/Footer";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";

const { width, height } = Dimensions.get("window");

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const handleSubmit = () => {
    dispatch(registerUser(phoneNumber));
  };

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
              <PhoneInput
                textContentType="telephoneNumber"
                dataDetectorTypes="phoneNumber"
                keyboardType="phone-pad"
                maxLength={4}
                textInputProps={{ maxLength: 10 }}
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                autoFocus
                required
                autoCorrect={false}
                containerStyle={{ height: 54 }}
                flagButtonStyle={{ borderRadius: 9 }}
                onChangeFormattedText={(value) =>
                  setPhoneNumber(value.replace(/[^0-9]/, ""))
                }
              />
              <Button onPress={handleSubmit}>Continue</Button>
              <View style={style.row}>
                <Text>Already have an account? </Text>
                <TouchableWithoutFeedback onPress={() => console.log("heyyy")}>
                  <Text style={{ color: colors.primary }}>Log in</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
