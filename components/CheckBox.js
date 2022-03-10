import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Checkbox({ primaryAddress }) {
  const [checked, setChecked] = useState(primaryAddress);

  function onCheckmarkPress() {
    setChecked(!checked);
    console.log("Check Box Pressed");
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && <Ionicons name="checkmark" size={15} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "black",
  },
});
