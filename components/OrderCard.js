import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OrderCard({
  orderNumber = 1947034,
  orderDate = "15/12/2021",
  trackingNumber = "IW12345678",
  quantity = 3,
  totalAmount = "112$",
  onPress,
  delivered = true,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.orderNumberView}>
        <Text style={styles.bold}>
          Order N<Text style={styles.underline}>o</Text>: {orderNumber}
        </Text>
        <Text style={styles.textColor}>{orderDate}</Text>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={styles.textColorTwo}>
          Tracking Number:{" "}
          <Text style={styles.textColor}>{trackingNumber}</Text>
        </Text>
        <View style={styles.quantityTotalAmount}>
          <Text style={styles.textColorTwo}>
            Quantity: <Text style={styles.textColor}>{quantity}</Text>
          </Text>
          <Text style={styles.textColorTwo}>
            Total Amount: <Text style={styles.textColor}>{totalAmount}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.detailsAndDelivered}>
        <Pressable
          android_ripple={{ borderless: true, color: "#FFF" }}
          android_disableSound={true}
          onPress={() => {
            console.log("Details Pressed");
            onPress();
          }}
        >
          <View style={styles.details}>
            <Text>Details</Text>
          </View>
        </Pressable>
        {delivered ? (
          <Text style={styles.textColorSuccess}>Delivered</Text>
        ) : (
          <Text style={styles.textColorDanger}>Not Delivered</Text>
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
  orderNumberView: { flexDirection: "row", justifyContent: "space-between" },
  details: {
    height: 36,
    width: 93,
    backgroundColor: "#FFF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  detailsAndDelivered: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityTotalAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textColor: { color: "black" },
  textColorTwo: { color: "#9B9B9B" },
  textColorDanger: { color: "red" },
  textColorSuccess: { color: "green" },
});
