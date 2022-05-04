import React from 'react';
import {Button} from 'react-native-elements';

import styles from './styles';

const ButtonValidate = ({onPress, buttonStyle, disabled, label}) => (
  <Button
    buttonStyle={[
      styles.buttonContainer,
      buttonStyle,
      {
        opacity: disabled ? 0.5 : 1,
      },
    ]}
    loadingProps={{color: 'black', size: 'large'}}
    onPress={onPress}
    loading={disabled}
    disabled={disabled}
    title={label}
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
