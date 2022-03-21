import React, { useState } from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
const TouchableRipple = ({ children, style, onPress, ...rest }) => {
  const [rippleColor] = useState("rgba(0,0,0,.2)");
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <TouchableNativeFeedback
      onPress={() => {
        setRippleOverflow(!rippleOverflow);
        onPress();
      }}
      background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
    >
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  touchable: { flex: 0.5, borderColor: "black", borderWidth: 1 },
  text: { alignSelf: "center" },
});

export default TouchableRipple;
