import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import RnDatePicker from 'react-native-date-picker';

import LabelError from '../LabelError';

import styles from './styles';

export default class CustomDate extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    onDateChange: PropTypes.func,
    disabled: PropTypes.bool,
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
    dateFormat: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    value: '',
    placeholder: '',
    onDateChange: () => {},
    disabled: false,
    minDate: null,
    maxDate: null,
    dateFormat: 'DD-MM-YYYY',
    error: false,
  };

  onDateChange = date => {
    const {onDateChange} = this.props;
    onDateChange(date);
  };

  render() {
    const {
      label,
      value,
      placeholder,
      disabled,
      minDate,
      maxDate,
      dateFormat,
      error,
    } = this.props;
    const moreOptions = {};
    if (minDate) {
      moreOptions.minimumDate = new Date(minDate);
    }
    if (maxDate) {
      moreOptions.maximumDate = new Date(maxDate);
    }

    return (
      <View>
        <LabelError
          placeholder={this.props.placeholder}
          label={label}
          error={error}
        />
        <RnDatePicker
          {...moreOptions}
          locale="fr-FR"
          style={styles.dateContainer}
          date={new Date(value)}
          mode="date"
          placeholder={placeholder}
          format={dateFormat}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          disabled={disabled}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}
