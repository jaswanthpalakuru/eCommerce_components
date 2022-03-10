import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Filters({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="md-filter" size={24} color="black" />
        <Text style={styles.text}>Filters</Text>
      </View>
    </Pressable>
  );
}
function PriceSort({ onPress, price }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="swap-vertical" size={24} color="black" />
        <Text style={styles.text}>Price: {price}</Text>
      </View>
    </Pressable>
  );
}
function ViewModule({ onPress, price }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialIcons name="view-module" size={24} color="black" />
      </View>
    </Pressable>
  );
}

export default { Filters, PriceSort, ViewModule };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 11,
  },
});
