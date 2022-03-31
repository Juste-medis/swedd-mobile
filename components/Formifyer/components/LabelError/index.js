import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class LabelError extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    error: false,
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  };

  render() {
    const {label, error, placeholder} = this.props;
    const {theme} = this.context;
    const isRequired = `${label}`[`${label}`.length - 1] === '*';
    return (
      <View>
        {label ? (
          <Text style={{...theme.label, fontFamily: 'Lato-Bold'}}>
            {isRequired ? `${label}`.replace(`*`, '') : label}
            {isRequired && <Text style={{color: 'red'}}>*</Text>}
          </Text>
        ) : null}
        {placeholder && (
          <Text style={{paddingBottom: 15, color: 'grey'}}>{placeholder}</Text>
        )}
        {error ? (
          <Text style={theme.error}>
            Ce champ est requis ou doit être bien remplis.
          </Text>
        ) : null}
      </View>
    );
  }
}
