import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "./CheckBox";

// function MyCheckbox() {
//   const [checked, onChange] = useState(false);

//   function onCheckmarkPress() {
//     onChange(!checked);
//     console.log("Check Box Pressed");
//   }

//   return (
//     <Pressable
//       style={[styles.checkboxBase, checked && styles.checkboxChecked]}
//       onPress={onCheckmarkPress}
//     >
//       {checked && <Ionicons name="checkmark" size={16} color="white" />}
//     </Pressable>
//   );
// }

export default function AddressCard({
  name = "John Doe",
  address1 = "3 New Bridge Court",
  address2 = "Chino Hills, CA 91709, UNITED STATES",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.addressText}>{name}</Text>
        <Pressable
          onPress={() => {
            console.log("Edit Pressed");
          }}
        >
          <Text style={styles.editButton}>Edit</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.addressText}>{address1}</Text>
        <Text style={styles.addressText}>{address2}</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox primaryAddress={true} />
        <Text style={[styles.label, styles.addressText]}>
          Use as the Shipping Address?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3,
  },
  card: { flexDirection: "row", justifyContent: "space-between" },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "black",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
  editButton: { color: "#DB3022", fontSize: 14, lineHeight: 20 },
  addressText: { fontSize: 14, lineHeight: 20 },
});
