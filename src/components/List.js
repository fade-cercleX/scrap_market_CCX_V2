import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];
const List = () => {
  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={{height:"100%"}} > 
    <FlashList
      data={DATA}
      renderItem={({ item }) => (
        <Text style={{ color: "red", height: "100%" }}>{item.title}</Text>
      )}
      estimatedItemSize={200}
      style={{ margin: 40 }}
    /></View>
  );
};

export default List;

const styles = StyleSheet.create({});
