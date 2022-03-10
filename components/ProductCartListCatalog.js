import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Rating from "./Rating";

import Button1 from "../components/Button.js";
export default function ProductCartListCatalog({
  image = "https://picsum.photos/200",
  name = "PullOver",
  rating = "3",
  price = "50$",
}) {
  return (
    <View>
      <View style={styles.card}>
        <Image
          source={{
            uri: image,
            height: 104,
            width: 104,
          }}
        />
        <View style={styles.content}>
          <Text>{name}</Text>
          <Text style={styles.mango}>Mango</Text>
          <View style={styles.ratingView}>
            <Rating />
            <Text>({rating})</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.addToFavourite}>
        <Button1.AddToFavouritesWhite />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 104,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    elevation: 5,
  },
  content: {
    padding: 10,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  addToFavourite: {
    position: "absolute",
    bottom: -10,
    right: 0,
    overflow: "visible",
    elevation: 5,
    zIndex: 1,
  },
  mango: { color: "grey" },
  ratingView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  price: { color: "black" },
});
