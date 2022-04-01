import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import CustomInput from '../components/CustomInput';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import CustomDate from '../components/CustomDate';
import NumberSelector from '../components/NumberSelector';
import Select from '../components/Select';
import Button from '../components/Button';

import {getInputType} from '../util';
import {buildTheme} from '../config/styles';
import styles from './styles';

const defaultTheme = buildTheme();

export default class DynamicForm extends Component {
  static propTypes = {
    form: PropTypes.array.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    theme: PropTypes.object,
    onFormDataChange: PropTypes.func,
    submitButton: PropTypes.object,
  };

  static defaultProps = {
    style: {},
    theme: defaultTheme,
    onFormDataChange: () => {},
    submitButton: {},
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.errors = {};
    _.each(props.form, element => {
      this.errors[element.key] = false;
    });
    this.state = {
      responses: this.poupulateDefaultFormFields(),
      errors: this.errors,
    };
  }

  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  getFormElementLabel = item => `${item.label} ${item.required ? '*' : ''}`;

  getFormElementValue = (key, element) => {
    const {responses} = this.state;
    const formAnswer = _.get(responses, key);
    if (!_.isEmpty(formAnswer)) {
      return _.get(formAnswer, 'userAnswer');
    }
    return _.get(element, 'value');
  };

  _getFormResponses = () => {
    let responses = this.state.responses;
    let anythingOk = responses;
    _.each(this.props.form, element => {
      const validi = this.validateInput(
        responses[element.key]?.userAnswer,
        element,
      );
      if (validi) {
        let newState = {...this.state.errors};
        newState[element.key] = false;
        this.errors[element.key] = false;
        this.setState({errors: newState});
      } else {
        anythingOk = false;
        this.errors[element.key] = true;
        this.setState({errors: {...this.state.errors, [element.key]: true}});
      }
    });
    return anythingOk;
  };

  poupulateDefaultFormFields = () => {
    const {form} = this.props;
    // empty responses object
    const responses = {};
    // loop through form to populate default values
    _.each(form, element => {
      switch (element.type) {
        case 'radio-group':
          const selectedValue = _.find(element.values, value => value.selected);
          if (selectedValue) {
            _.set(responses, element.key, {
              ...element,
              userAnswer: selectedValue.value,
            });
          }
          break;
        case 'starRating':
        case 'number':
        case 'date':
        case 'text':
        case 'textarea':
          if (element.value) {
            _.set(responses, element.key, {
              ...element,
              userAnswer: element.value,
            });
          }
          break;
        case 'select':
          const selectedValues = _.filter(
            element.values,
            value => value.selected,
          );
          if (!_.isEmpty(selectedValues)) {
            _.set(responses, element.key, {
              ...element,
              userAnswer: [],
            });
            _.each(selectedValues, value => {
              responses[element.key].userAnswer.push(value.value);
            });
          }
          break;
        case 'checkbox-group':
          const valuesSelected = _.filter(
            element.values,
            value => value.selected,
          );
          if (!_.isEmpty(selectedValues)) {
            _.set(responses, element.key, {
              ...element,
              userAnswer: {
                regular: [],
              },
            });
            _.each(valuesSelected, value => {
              responses[element.key].userAnswer.regular.push(value.value);
            });
          }
          break;
        default:
          break;
      }
    });
    return responses;
  };
  validateInput = (value, element) => {
    let valid = true;
    if (element.type === 'header') {
      return true;
    }
    if (element.type === 'checkbox-group' && element.required) {
      valid = value?.regular?.length > 0 || !!value?.other?.value;
    } else {
      valid = !!value;
    }
    return valid;
  };
  updateFormElement = (value, element) => {
    const {onFormDataChange} = this.props;
    const {responses} = this.state;
    const clonedResponses = _.cloneDeep(responses);
    const formAnswer = _.get(clonedResponses, element.key);

    const validi = !this.validateInput(value, element);
    this.errors[element.key] = validi;
    this.setState({
      errors: {
        ...this.state.errors,
        [element.key]: validi,
      },
    });

    if (!_.isEmpty(formAnswer)) {
      formAnswer.userAnswer = value;
    } else {
      _.set(clonedResponses, element.key, {
        ...element,
        userAnswer: value,
      });
    }
    this.setState(
      {
        responses: clonedResponses,
      },
      () => {
        // if listener is set on form data changes,
        // propagate back to parent component
        if (onFormDataChange) {
          onFormDataChange(this.state.responses);
        }
      },
    );
  };

  submitButtonPress = () => {
    const {action} = this.props.submitButton;
    action(this.state.responses);
  };

  renderForm = () => {
    const {form, submitButton} = this.props;
    const formElements = _.map(form, element => {
      const {key, type, subtype, style, required} = element;
      const label = this.getFormElementLabel(element);
      // const hasError = errors.indexOf(key) !== -1 && this.submitTriggered;
      switch (type) {
        case 'header':
          return (
            <View key={key} style={styles.row}>
              <Header label={label} subType={subtype} style={style} />
            </View>
          );
        case 'paragraph':
          return (
            <View key={key} style={styles.row}>
              <Paragraph label={label} style={style} />
            </View>
          );

        case 'textarea':
          const textAreaOptions = {};
          if (element.maxlength) {
            textAreaOptions.maxLength = Number(element.maxlength);
          }
          return (
            <View key={key} style={styles.row}>
              <CustomInput
                {...textAreaOptions}
                error={this.state.errors[key]}
                required={required}
                onChangeText={value => {
                  this.updateFormElement(value, element);
                }}
                multiline
                value={this.getFormElementValue(key, element)}
                label={label}
                keyboardType="default"
                validation={element.validationFunc}
                placeholder={element.placeholder}
                disabled={element.disabled}
              />
            </View>
          );

        case 'radio-group':
          const radioOptions = {};
          if (element.other) {
            radioOptions.other = element.other;
          }
          return (
            <View key={key} style={styles.row}>
              <RadioGroup
                error={this.state.errors[key]}
                required={required}
                {...radioOptions}
                placeholder={element.placeholder}
                label={label}
                options={element.values}
                value={this.getFormElementValue(key, element)}
                onRadioValueChanged={value => {
                  this.updateFormElement(value, element);
                }}
              />
            </View>
          );
        case 'checkbox-group':
          const checkOptions = {};
          if (element.other) {
            checkOptions.other = element.other;
          }
          if (element.toggle) {
            checkOptions.toggle = element.toggle;
          }
          return (
            <View key={key} style={styles.row}>
              <CheckboxGroup
                required={required}
                error={this.state.errors[key]}
                {...checkOptions}
                label={label}
                options={element.values}
                onCheckboxValueChanged={value => {
                  this.updateFormElement(value, element);
                }}
                value={this.getFormElementValue(key, element)}
              />
            </View>
          );
        case 'date':
          return (
            <View key={key} style={styles.row}>
              <CustomDate
                error={this.state.errors[key]}
                required={required}
                placeholder={element.placeholder}
                label={label}
                value={this.getFormElementValue(key, element)}
                onDateChange={value => {
                  this.updateFormElement(value, element);
                }}
                disabled={element.disabled}
                minDate={element.minDate}
                maxDate={element.maxDate}
                dateFormat={element.dateFormat}
              />
            </View>
          );
        case 'select':
          const multiOptions = {
            single: !element.multiple,
          };
          return (
            <View key={key} style={styles.row}>
              <Select
                required={required}
                error={this.state.errors[key]}
                {...multiOptions}
                searchInputPlaceholder={element.searchInputPlaceholder}
                data={element.values}
                label={label}
                values={this.getFormElementValue(key, element)}
                onSelect={value => {
                  this.updateFormElement(value, element);
                  element.onchange ? element.onchange(value) : () => {};
                }}
              />
            </View>
          );
        case 'number':
          return (
            <View key={key} style={styles.row}>
              <NumberSelector
                required={required}
                error={this.state.errors[key]}
                label={label}
                disabled={element.disabled}
                placeholder={element.placeholder}
                onNumberChanged={value => {
                  this.updateFormElement(value, element);
                }}
                min={element.min}
                max={element.max}
                step={element.step}
                directTextEdit={element.directTextEdit}
                value={(() => {
                  const number = Number(this.getFormElementValue(key, element));
                  if (isNaN(number)) {
                    return element.min;
                  }
                  if (number < element.min) {
                    return element.min;
                  }
                  if (number > element.max) {
                    return element.max;
                  }
                  return number;
                })()}
              />
            </View>
          );
        default:
          const moreOptions = {};
          if (element.maxlength) {
            moreOptions.maxLength = Number(element.maxlength);
          }
          return (
            <View key={key} style={styles.row}>
              <CustomInput
                error={this.state.errors[key]}
                required={required}
                {...moreOptions}
                onChangeText={value => {
                  this.updateFormElement(value, element);
                }}
                value={this.getFormElementValue(key, element)}
                label={label}
                keyboardType={getInputType(element.subtype)}
                validation={element.validationFunc}
                password={element.subtype === 'password'}
                placeholder={element.placeholder}
                disabled={element.disabled}
                icon={element.icon}
                masked
              />
            </View>
          );
      }
    });
    // push submit button if specified
    if (!_.isEmpty(submitButton)) {
      const {label, buttonStyle, buttonTextStyle, disabled} = submitButton;
      formElements.push(
        <View key="submitButton" style={styles.row}>
          <Button
            label={label}
            onPress={this.submitButtonPress}
            buttonStyle={buttonStyle}
            buttonTextStyle={buttonTextStyle}
            disabled={disabled}
          />
        </View>,
      );
    }
    return formElements;
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderForm()}
        </ScrollView>
      </View>
    );
  }
}
