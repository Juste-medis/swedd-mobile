import React, {useRef} from 'react';
import {Animated, View, StyleSheet, Text} from 'react-native';
import Globals from '../../Ressources/Globals';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  const interpolatedAnimation = fadeAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  Animated.loop(
    Animated.sequence([
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
        delay: 3000,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
        delay: 1000,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]),
  ).start();
  return (
    <View style={styles.container}>
      <Text style={styles.retry_text}>{Globals.STRINGS.explore}</Text>
      <View style={styles.side_container}>
        <Animated.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            opacity: interpolatedAnimation,
            marginStart: interpolatedAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['1%', '80%'],
            }),
          }}>
          <Icon
            style={{marginStart: 5}}
            name="circle"
            size={10}
            color={Globals.COLORS.primary}
          />
          <Icon
            style={{marginStart: 5}}
            name="arrow-right"
            size={30}
            color={Globals.COLORS.primary}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  side_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '50%',
    width: '50%',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  retry_text: {
    backgroundColor: Globals.COLORS.primary,
    borderRadius: 7,
    color: 'white',
    padding: 8,
    fontFamily: 'Lato-Bold',
    marginTop: 2,
    elevation: 4,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
});

export default App;
