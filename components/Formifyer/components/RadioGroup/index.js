import React, {Component, useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import LabelError from '../LabelError';
import CustomInput from '../CustomInput';

import styles from './styles';

import {CheckBox, Icon} from 'react-native-elements';

export default class RadioGroup extends Component {
  static propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    onRadioValueChanged: PropTypes.func,
    other: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    onRadioValueChanged: () => {},
    other: false,
    value: '',
    error: false,
  };

  state = {
    selectedValue: '',
    textValue: '',
  };

  onCheck = value => {
    const {onRadioValueChanged} = this.props;
    const {selectedValue} = this.state;
    const newValue = value.value;
    if (newValue !== 'other') {
      this.setState({
        selectedValue: newValue,
        textValue: '',
      });
      onRadioValueChanged(newValue);
    } else {
      if (selectedValue !== 'other') {
        onRadioValueChanged('');
      }
      this.setState({
        selectedValue: newValue,
      });
    }
  };

  onOtherTextChanged = text => {
    const {onRadioValueChanged} = this.props;
    onRadioValueChanged(text);
  };

  renderOtherInput = () => {
    const {selectedValue, textValue} = this.state;
    if (selectedValue === 'other') {
      return (
        <CustomInput
          value={textValue}
          keyboardType="default"
          validation={v => v}
          onChangeText={this.onOtherTextChanged}
        />
      );
    }
    return null;
  };

  render() {
    const {label, options, error, other} = this.props;
    const {selectedValue} = this.state;
    const propValue = this.props.value;
    return (
      <View>
        <LabelError label={label} error={error} />
        <View style={styles.radioContainer}>
          {_.map(options, value => (
            <View>
              <CheckBox
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                key={_.get(value, 'value')}
                title={_.get(value, 'label')}
                checked={propValue === value.value}
                onSelect={() => {}}
                onPress={checked => {
                  this.onCheck(value, true);
                }}
              />
            </View>
          ))}
          {other ? (
            <View style={styles.otherRow}>
              <CheckBox
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={25}
                    iconStyle={{marginRight: 10}}
                  />
                }
                onPress={checked => {
                  this.onCheck(
                    {
                      value: 'other',
                      label: 'Autres',
                    },
                    checked,
                  );
                }}
                key="other"
                title="Autres"
                checked={selectedValue === 'other'}
                value="other"
                onSelect={() => {}}
              />
              <View style={{flex: 1}}>{this.renderOtherInput()}</View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}
