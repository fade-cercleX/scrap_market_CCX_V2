import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, SemiBold } from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import { MaterialIcons, Entypo, Feather,MaterialCommunityIcons,Ionicons} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
    const navigate = useNavigation()
  return (
    <SafeAreaView style={{ ...style.screen }}>
      <View>
        <SemiBold style={{ color: colors.gray }}>
          Account and Preferences
        </SemiBold>
        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("EditUserProfile")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialCommunityIcons name="account-edit-outline" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Edit profile</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("NotificationSetting")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <Ionicons name="notifications-outline" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Notifications</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("ChangePassword")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <Ionicons name="eye-off-outline" size={20} color={colors.primary} />
              <Text style={style.ml_1}>Change password</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View>
        <SemiBold style={{ color: colors.gray, ...style.mt_1 }}>
          Others
        </SemiBold>
        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("PrivacyPolicies")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <Ionicons name="newspaper-outline" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Privacy policies</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("MyActiveScraps")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialCommunityIcons name="account-group-outline" size={24} color={colors.primary} />
              <Text style={style.ml_1}>About us</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Settings;
