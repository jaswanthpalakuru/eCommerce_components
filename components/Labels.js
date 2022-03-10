import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Labels({ text, bgColor, discount }) {
  return (
    <View style={[styles.label, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    backgroundColor: "#DF4538",
    borderRadius: 100,
    paddingVertical: 7,
    fontSize: 11,
    fontFamily: "Metropolis",
  },
  text: { marginHorizontal: 10, fontSize: 11, color: "#FFF" },
});
