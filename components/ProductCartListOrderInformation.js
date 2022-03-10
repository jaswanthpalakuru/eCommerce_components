import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductCartListOrderInformation({
  name = "Pullover",
  color = "Black",
  size = "L",
  price = "50$",
  units = 1,
  image = "https://thumbs.dreamstime.com/b/fashion-portrait-pretty-sweet-young-woman-blowing-red-lips-wearing-black-hat-sunglasses-coat-over-grey-background-79064183.jpg",
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
          height: 104,
          width: 104,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subcontent}>Mango</Text>
        <View style={styles.features}>
          <Text style={styles.subcontent}>
            Color: <Text style={styles.color}>{color}</Text>
          </Text>
          <Text style={styles.subcontent}>
            Size: <Text style={styles.color}>{size}</Text>
          </Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.subcontent}>
            Units: <Text style={styles.color}>{units}</Text>
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
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
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
  },
  subcontent: {
    color: "#C0C0C0",
    fontSize: 12,
  },
  features: {
    flexDirection: "row",
    width: "70%",
    fontSize: 11,
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontSize: 11,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: { fontSize: 16 },
  color: { color: "black" },
  price: { color: "black", fontSize: 14 },
});
