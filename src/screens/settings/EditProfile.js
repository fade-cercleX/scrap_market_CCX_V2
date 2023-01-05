import React from "react";
import { View, TextInput, StyleSheet,ScrollView } from "react-native";
import { Text } from "../../layout/Text";
import { style } from "../../styles/index";
import { Button } from "../../layout/Button";

const EditUserProfile = () => {
  return (
    <ScrollView style={style.screen}>
      <View style={style.form}>
        <Text>Name</Text>
        <TextInput placeholder="User Name" style={style.inputText} />
        <Text>Email ID</Text>
        <TextInput placeholder="Email ID" style={style.inputText} keyboardType="email-address" />

        <Text>Phone Number</Text>
        <TextInput placeholder="Phone Number" style={style.inputText} keyboardType={"phone-pad"}  />

        <Text>Company Name</Text>
        <TextInput placeholder="Company Name" style={style.inputText} />

        <Text>Company Address</Text>
        <TextInput placeholder="Company Address" style={style.inputText} />
        <Button>Save Details</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default EditUserProfile;
