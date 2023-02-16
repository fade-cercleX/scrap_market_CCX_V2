import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { style } from "../../styles";
import { Text } from "../../layout/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/color";
import { Button } from "../../layout/Button";
import Footer from "../../layout/Footer";
import PhoneNumberInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import { isValidMobileNumber } from "../../helper/helper";
const { width, height } = Dimensions.get("window");

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(45454548);
  const phoneInput = useRef(null);

  const handleSubmit = () => {
    if (isValidMobileNumber(phoneNumber)) {
      dispatch(registerUser(phoneNumber, navigation));
    } else {
      console.log("error");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={{ ...style.screen, ...style.pt_2 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.authScreen}>
          <View style={style.center}>
            <Image
              source={require("../../../assets/images/appLogo.png")}
              style={style.appLogo}
            />
            <View
              style={{ ...style.form, ...style.mt_2, ...styles.inputField }}
            >
              <PhoneNumberInput
                textInputProps={{ maxLength: 10, keyboardType: "phone-pad" }}
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                autoFocus
                autoCorrect={false}
                containerStyle={{ height: 54 }}
                flagButtonStyle={{ borderRadius: 9 }}
                onChangeFormattedText={(text) => {
                  setPhoneNumber(text);
                }}
              />

              <Button onPress={handleSubmit}>Continue</Button>
              <View style={style.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={{ color: colors.primary }}>Log in</Text>
                </TouchableOpacity>
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
  inputField: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 7,
    height: 57,
  },
});
