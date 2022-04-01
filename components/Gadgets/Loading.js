import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingDot = () => {
  return (
    <View style={styles.centeredView}>
      <LottieView
        source={require('../../assets/loties/spinner.json')}
        autoPlay
        loop
        style={{width: 150, height: 150, marginVertical: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingDot;
