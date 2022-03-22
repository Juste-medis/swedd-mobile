import React from "react";
import { StyleSheet, Text } from "react-native";
import Globals from "../../Ressources/Globals";
export default function TextW({ text, seemore, seemorecolor, size, ...rest }) {
  size = size ? size : 100;
  seemore =
    text.length > size && seemore ? seemore : text.length > size ? " .." : null;

  seemorecolor =
    text.length > size && seemorecolor
      ? seemorecolor
      : text.length > size
      ? "#23233cff"
      : null;

  text = text.length > size ? text.substr(0, size) : text;
  return (
    <Text style={styles.input} {...rest}>
      {text}
      <Text
        style={[styles.seemore, { color: seemorecolor }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {seemore}
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    textAlign: "center",
    color: Globals.COLORS.arsenic,
  },
  seemore: {
    fontWeight: "bold",
  },
});
