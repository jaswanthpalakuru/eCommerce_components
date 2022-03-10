import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function fonts() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./Poppins/Poppins-SemiBold"),
    PoppinsBold: require("./Poppins/Poppins-Bold"),
    PoppinsMedium: require("./Poppins/Poppins-Medium"),
  });

  if (!loaded) {
    return null;
  }
  return loaded;
}

const styles = StyleSheet.create({});
