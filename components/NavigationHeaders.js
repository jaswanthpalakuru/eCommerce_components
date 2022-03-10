import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function NavigationHeader({ onPress, heading = "Heading" }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={onPress}>
        <Entypo name="chevron-left" size={24} color="black" />
      </Pressable>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 15,
    padding: 5,
  },
  text: {
    fontSize: 18,
  },
});
