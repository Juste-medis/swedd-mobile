import React from 'react';
import {Text, View} from 'react-native';
import {styleMyCoursesScreen as styles} from '../../Ressources/Styles';
import LottieView from 'lottie-react-native';

export default function EmptyThing({message, style}) {
  return (
    <View style={styles.empty_container}>
      <LottieView
        source={require('../../assets/loties/empty-list.json')}
        autoPlay
        loop
        style={{width: 250, height: 250, marginVertical: 20, ...style}}
      />
      <Text style={styles.head_title}>{message}</Text>
    </View>
  );
}
