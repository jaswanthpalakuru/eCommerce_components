import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PlayGround({
  orderNumber = 1947034,
  orderDate = "15/12/2021",
  trackingNumber = "IW12345678",
  quantity = 3,
  totalAmount = "112$",
  onPress,
  delivered = false,
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.bold}>
          Order N<Text style={styles.underline}>o</Text>: {orderNumber}
        </Text>
        <Text style={styles.textColor}>{orderDate}</Text>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={{ color: "#9B9B9B" }}>
          Tracking Number:{" "}
          <Text style={{ color: "black" }}>{trackingNumber}</Text>
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#9B9B9B" }}>
            Quantity: <Text style={{ color: "black" }}>{quantity}</Text>
          </Text>
          <Text style={{ color: "#9B9B9B" }}>
            Total Amount: <Text style={{ color: "black" }}>{totalAmount}</Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          android_ripple={{ borderless: true, color: "#FFF" }}
          android_disableSound={true}
          onPress={() => {
            console.log("Details Pressed");
            onPress;
          }}
        >
          <View
            style={{
              height: 36,
              width: 93,
              backgroundColor: "#FFF",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
            }}
          >
            <Text>Apply</Text>
          </View>
        </Pressable>
        {delivered ? (
          <Text style={{ color: "green" }}>Delivered</Text>
        ) : (
          <Text style={{ color: "red" }}>Not Delivered</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
  normalFont: { fontWeight: "normal" },
  textColor: { color: "#9B9B9B" },
});
