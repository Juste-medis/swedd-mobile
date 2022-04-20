/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {styletoollength as styles} from '../../Ressources/Styles';
export default function ToolItemLength(data) {
  let {style} = data;
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          justifyContent: 'center',
          elevation: 10,
          backgroundColor: '#fff',
          width: 30,
          height: 30,
          borderRadius: 30,
          zIndex: 1,
          ...style,
        }}>
        <Text
          style={{
            ...styles.learnig_display_text,
            fontWeight: 'bold',
            fontSize: 10,
            color: style && style.color ? style.color : '#000',
          }}>
          {data.value}
        </Text>
      </View>
      <View
        style={{
          marginLeft: -10,
          borderTopEndRadius: 50,
          borderBottomRightRadius: 50,
          width: '95%',
        }}>
        <Text
          style={{
            ...styles.learnig_display_text,
            borderColor: '#dddddd',
            borderBottomWidth: 1.5,
            paddingVertical: 10,
            borderRadius: 10,
            padding: 6,
            paddingLeft: 20,
            color: '#393f4a',
          }}>
          {data.label}
        </Text>
      </View>
    </View>
  );
}
