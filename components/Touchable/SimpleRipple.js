import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const SimpleRipple = ({rippleColor, children, style, onPress, ...rest}) => {
  rippleColor = rippleColor || 'rgba(0,0,0,.2)';
  const [rippleOverVlow, setrippleOverVlow] = useState(false);

  return (
    <TouchableNativeFeedback
      onPress={() => {
        setrippleOverVlow(!rippleOverVlow);
        onPress();
      }}
      background={TouchableNativeFeedback.Ripple(rippleColor, false)}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  );
};

export default SimpleRipple;
