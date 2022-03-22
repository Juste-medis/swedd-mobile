import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Globals from "../../Ressources/Globals";
export default function pannier({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.main_container}
      onPress={() => {
        navigation.navigate("MyCoursesScreen");
      }}
    >
      <Text style={styles.price}>{Globals.STRINGS.my_courses}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: Globals.COLORS.cerulean,
    marginStart: 100,
  },
  price: {
    fontWeight: "bold",
    color: Globals.COLORS.cerulean,
    fontSize: 15,
    margin: 10,
  },
});
