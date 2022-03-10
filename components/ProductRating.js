import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function Rating({ rating }) {
  const maxRating = [1, 2, 3, 4, 5];
  const starImgFilled = require("../assets/star_filled.png");
  // "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorner = require("../assets/star_corner.png");
  // "/https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            // <Image source={starImgCorner} />
            <Image
              style={styles.StarImgStyle}
              key={key}
              source={item <= rating ? starImgFilled : starImgCorner}
            />
          );
        })}
      </View>
    );
  };
  return (
    // <SafeAreaView style={styles.container}>
    <CustomRatingBar />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // justifyContent: "center",
  // },
  CustomRatingBarStyle: {
    // justifyContent: "center",
    flexDirection: "row",
  },
  StarImgStyle: {
    width: 13,
    height: 12,
    // resizeMode: "cover",
  },
});
