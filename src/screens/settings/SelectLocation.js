import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SemiBold, Text } from "../../layout/Text";
import { style } from "../../styles/index";
import { MaterialIcons, EvilIcons } from "react-native-vector-icons";
import { Button } from "../../layout/Button";
import { colors } from "../../styles/color";

const SelectLocation = () => {
  const data = [1, 2, 3];
  const renderItem = (item, index, separators) => {
    return (
      <View
        style={styles.renderItem}
        key={item.key}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
      >
        <View style={{ ...style.row }}>
          <EvilIcons name="location" size={30} color={colors.primary} />
          <SemiBold style={{ color: colors.primary }}>Office</SemiBold>
        </View>
        <View style={style.ml_2}>
          <Text>wxhc+5G3,Madukkarai, Tamil Nadu 641021, India.</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ ...style.container, ...style.mv_2 }}>
      <View style={{ ...style.row, ...style.s_b }}>
        <SemiBold>Select your location</SemiBold>
        <View style={styles.locatio_icon}>
          <MaterialIcons name="add-location-alt" size={24} color="#6f2da8" />
        </View>
      </View>
      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index, separators }) =>
          renderItem(item, index, separators)
        }
      />
      <Button>Confirm Location</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  locatio_icon: {
    backgroundColor: "rgba(247, 239, 254, 1)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
    borderColor: "#6f2da8",
    borderWidth: 1,
  },
  renderItem: {
    paddingVertical: 12,
  },
});
export default SelectLocation;
