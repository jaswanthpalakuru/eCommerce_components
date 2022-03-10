import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function PromoCodeCard({
  // image = false,
  offerName = "Personal Offer",
  promoCode = "mypromocode2020",
  days = 23,
  onPress,
  image = "https://picsum.photos/200",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          {image ? (
            <Image
              source={{
                uri: image,
                height: 104,
                width: 104,
              }}
            />
          ) : (
            <View style={styles.view}></View>
          )}

          <View style={styles.contentOne}>
            <Text style={styles.percentageNumber}>
              10
              <View style={{ justifyContent: "space-around" }}>
                <Text style={styles.percentage}>%</Text>
                <Text style={styles.percentage}>off</Text>
              </View>
            </Text>
          </View>
        </View>
        <View style={styles.contentTwo}>
          <Text style={styles.offerNameText}>{offerName}</Text>
          <Text style={promcodeText}>{promoCode}</Text>
        </View>
        <View style={styles.daysView}>
          <Text style={styles.daysText}> {days} days remaining</Text>
          <Pressable
            style={styles.button}
            android_ripple={{ borderless: true, color: "#FFF" }}
            android_disableSound={true}
            onPress={onPress}
          >
            <View style={styles.contentThree}>
              <Text>Apply</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 80 },
  card: {
    height: 104,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    elevation: 5,
    paddingRight: 10,
  },
  view: { backgroundColor: "#D40E15", height: 104, width: 104 },
  contentOne: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    left: 15,
    flex: 1,
  },
  contentTwo: {
    marginVertical: 22,
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  contentThree: {
    height: 36,
    width: 93,
    backgroundColor: "#DB3022",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  percentageNumber: { fontSize: 44, color: !image ? "#FFF" : "black" },
  percentage: { fontSize: 14, color: !image ? "#FFF" : "black" },
  daysView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  daysText: { fontSize: 11, marginBottom: 10 },
  offerNameText: { fontSize: 14 },
  promocodeText: { fontSize: 11 },
});
