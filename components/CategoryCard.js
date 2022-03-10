import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CategoryCard({ image = "https://picsum.photos/200" }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>New</Text>
      </View>
      <View style={styles.imageView}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 104,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    elevation: 5,
    alignItems: "center",
  },
  card: {
    flex: 1,
    marginLeft: 23,
    marginVertical: 39,
  },
  imageView: { flex: 1, backgroundColor: "grey" },
  text: { fontSize: 18 },
  image: { height: 104, width: 171 },
});
