import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

export default function RangeSlider() {
  return (
    <View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({ slider: { width: 200, height: 40 } });
