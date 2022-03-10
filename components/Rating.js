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

export default function Rating() {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorner =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setdefaultRating(item);
              }}
            >
              <Image
                style={styles.StarImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
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
