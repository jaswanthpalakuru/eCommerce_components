import { Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Switch({ click, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>
          <FontAwesome name="circle" size={20} color="#2AA952" />
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 20,
    backgroundColor: "#EFEFEF",
    borderRadius: 100,
    margin: 10,
  },
  text: { alignSelf: click ? "flex-end" : "flex-start" },
});
