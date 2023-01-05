import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Text, GrayText, SemiBold } from "../../layout/Text";
import { style } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../layout/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePassword = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState({
    newPassword: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandlerUser = (name) => (value) => {
    setPassword({ ...password, [name]: value });
  };

  const handelSubmit = () => {};
  return (
    <SafeAreaView style={style.screen} >
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={style.form}>
          <Text>Old password</Text>
          <TextInput
            value={password.password}
            placeholder="Old Password"
            onChangeText={changeHandlerUser("password")}
            style={style.inputText}
            secureTextEntry
          />

          <Text>New password</Text>
          <TextInput
            value={password.newPassword}
            placeholder="New Password"
            onChangeText={changeHandlerUser("newPassword")}
            style={style.inputText}
            secureTextEntry
          />

          <Text>Confirm New Password</Text>
          <TextInput
            value={password.confirmPassword}
            placeholder="Confirm New Password"
            onChangeText={changeHandlerUser("confirmPassword")}
            style={style.inputText}
            secureTextEntry
          />
          <View style={style.center}>
            <GrayText>Please don’t change your password frequently</GrayText>
          </View>
          <Button onPress={handelSubmit} style={style.mt_2}>
            Update New Password
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ChangePassword;
