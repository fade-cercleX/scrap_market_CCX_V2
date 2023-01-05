import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SemiBold, Text ,Bold} from "../../layout/Text";
import { style } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  Entypo,
  Feather,
  EvilIcons,
} from "react-native-vector-icons";
import { colors } from "../../styles/color";
import Modal from "react-native-modal";



const UserProfile = () => {
  const navigate = useNavigation();
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={style.screen} >
      <View style={style.pv_1} >
        <View style={{ ...style.row, ...style.mv_2 ,...style.s_b}}>
          <View style={style.row} > 
          <Image
            source={require("../../../assets/images/user.jpg")}
            style={style.usermage}
          />
          <View style={style.ml_1}>
            <SemiBold>fade h ahmad</SemiBold>
            <Text>+91 8807416965</Text>
          </View>
          </View>
          <View  style={style.row}>
            <MaterialIcons name='verified' color='green' size={20} />
            <Text style={{color:colors.green}} >Verified</Text>
          </View>
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("MyActiveScraps")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialIcons
                name="local-offer"
                size={24}
                color={colors.primary}
              />
              <Text style={style.ml_1}>My Active Scraps</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("MyActiveBids")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialIcons
                name="content-paste"
                size={24}
                color={colors.primary}
              />
              <Text style={style.ml_1}>My Active Bids</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("ScrapsHistory")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialIcons
                name="work-outline"
                size={24}
                color={colors.primary}
              />
              <Text style={style.ml_1}>Scraps History</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("BidsHistory")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialIcons name="history" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Bids History</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("MyLocations")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <EvilIcons name="location" size={24} color={colors.primary} />
              <Text style={style.ml_1}>My Locations</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("PurchaseCredits")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialIcons
                name="subscriptions"
                size={24}
                color={colors.primary}
              />
              <Text style={style.ml_1}>Subscriptions</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigate.navigate("PurchaseCredits")}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <MaterialIcons name="toll" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Additional Credits</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate.navigate("Settings")}>
          <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
            <View style={style.row}>
              <Feather name="settings" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Settings</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => toggleModal()}>
          <View
            style={{
              ...style.row,
              ...style.s_b,
              ...style.inputText,
              ...style.mb_2,
            }}
          >
            <View style={style.row}>
              <Entypo name="log-out" size={24} color={colors.primary} />
              <Text style={style.ml_1}>Logout</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>
      
        <Modal
          isVisible={visible}
          onSwipeComplete={toggleModal}
          swipeDirection={["down"]}
          style={styles.view}
        >
        
          <View style={styles.bottomSheet}>
            <Bold>Sign out</Bold>
            <Text>Are you sure want to sign out from the app?</Text>
            <View style={{ ...style.row, ...style.s_b, ...style.mt_2 }}>
              <TouchableWithoutFeedback
                onPress={() => toggleModal()}
              >
                <View style={styles.secondary_btn}>
                <Bold style={{ color: colors.primary }}>Cancel</Bold>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.primary_btn}>
                <Bold style={{ color: colors.white }}>Sign out</Bold>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  secondary_btn: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
    height: 54,
    justifyContent: "center",
  },
  primary_btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
    height: 54,
    justifyContent: "center",

  },
});
export default UserProfile;
