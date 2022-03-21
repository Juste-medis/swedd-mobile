import React, { useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => {
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const interpolatedAnimation = fadeAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  Animated.loop(
    Animated.sequence([
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();
  return (
    <View style={styles.container}>
      <View style={styles.side_container}>
        <Animated.View
          style={{
            opacity: interpolatedAnimation,
          }}
        >
          <Icon name="play" size={50} color="#FFF" />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  side_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50%",
    width: "50%",
    alignItems: "center",
    paddingVertical: "2%",
    marginHorizontal: 16,
  },
});

export default App;
