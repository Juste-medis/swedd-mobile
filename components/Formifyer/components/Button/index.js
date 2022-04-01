import React from 'react';
import {Button} from 'react-native-elements';

import styles from './styles';

const ButtonValidate = ({
  label,
  onPress,
  buttonStyle,
  buttonTextStyle,
  disabled,
}) => (
  <Button
    buttonStyle={[
      styles.buttonContainer,
      buttonStyle,
      {
        opacity: disabled ? 0.5 : 1,
      },
    ]}
    onPress={onPress}
    loading={disabled}
    disabled={disabled}
    title="Soumettre"
  />
);

Button.defaultProps = {
  onPress: () => {},
  buttonStyle: {},
  buttonTextStyle: {},
  disabled: false,
  loading: false,
};

export default ButtonValidate;
