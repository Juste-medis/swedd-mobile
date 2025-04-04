var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, {Component} from 'react';
import {
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import Input from '../input/Input';
import Icon from '../icons/Icon';
import {renderNode} from '../helpers';
const defaultSearchIcon = theme => ({
  type: 'ionicon',
  size: 20,
  name: 'ios-search',
  color: theme.colors.platform.ios.grey,
});
const defaultClearIcon = theme => ({
  type: 'ionicon',
  name: 'ios-close-circle',
  size: 20,
  color: theme.colors.platform.ios.grey,
});
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.focus = () => {
      this.input.focus();
    };
    this.blur = () => {
      this.input.blur();
    };
    this.clear = () => {
      this.input.clear();
      this.onChangeText('');
      this.props.onClear();
    };
    this.cancel = () => {
      this.onChangeText('');
      if (this.props.showCancel) {
        // @ts-ignore
        UIManager.configureNextLayoutAnimation &&
          LayoutAnimation.easeInEaseOut();
        this.setState({hasFocus: false});
      }
      setTimeout(() => {
        this.blur();
        this.props.onCancel();
      }, 0);
    };
    this.onFocus = event => {
      this.props.onFocus(event);
      // @ts-ignore
      UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
      this.setState({
        hasFocus: true,
        isEmpty: this.props.value === '',
      });
    };
    this.onBlur = event => {
      this.props.onBlur(event);
      if (!this.props.showCancel) {
        // @ts-ignore
        UIManager.configureNextLayoutAnimation &&
          LayoutAnimation.easeInEaseOut();
        this.setState({
          hasFocus: false,
        });
      }
    };
    this.onChangeText = text => {
      this.props.onChangeText(text);
      this.setState({isEmpty: text === ''});
    };
    const {value} = props;
    this.state = {
      hasFocus: false,
      isEmpty: value ? value === '' : true,
      cancelButtonWidth: null,
    };
  }
  render() {
    const _a = this.props,
      {
        theme,
        cancelButtonProps,
        cancelButtonTitle,
        clearIcon,
        containerStyle,
        leftIconContainerStyle,
        rightIconContainerStyle,
        inputContainerStyle,
        inputStyle,
        placeholderTextColor,
        showLoading,
        loadingProps,
        searchIcon,
        showCancel,
      } = _a,
      attributes = __rest(_a, [
        'theme',
        'cancelButtonProps',
        'cancelButtonTitle',
        'clearIcon',
        'containerStyle',
        'leftIconContainerStyle',
        'rightIconContainerStyle',
        'inputContainerStyle',
        'inputStyle',
        'placeholderTextColor',
        'showLoading',
        'loadingProps',
        'searchIcon',
        'showCancel',
      ]);
    const {hasFocus, isEmpty} = this.state;
    const {style: loadingStyle} = loadingProps,
      otherLoadingProps = __rest(loadingProps, ['style']);
    const {
        buttonStyle,
        buttonTextStyle,
        color: buttonColor,
        disabled: buttonDisabled,
        buttonDisabledStyle,
        buttonDisabledTextStyle,
      } = cancelButtonProps,
      otherCancelButtonProps = __rest(cancelButtonProps, [
        'buttonStyle',
        'buttonTextStyle',
        'color',
        'disabled',
        'buttonDisabledStyle',
        'buttonDisabledTextStyle',
      ]);
    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          {backgroundColor: theme.colors.white},
          containerStyle,
        ])}>
        <Input
          testID="searchInput"
          renderErrorMessage={false}
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          //@ts-ignore
          ref={input => {
            this.input = input;
          }}
          inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
          containerStyle={{
            paddingHorizontal: 0,
          }}
          inputContainerStyle={StyleSheet.flatten([
            styles.inputContainer,
            {backgroundColor: theme.colors.platform.ios.searchBg},
            hasFocus && {marginRight: this.state.cancelButtonWidth},
            inputContainerStyle,
          ])}
          leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon(theme))}
          leftIconContainerStyle={StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ])}
          placeholderTextColor={
            placeholderTextColor || theme.colors.platform.ios.grey
          }
          rightIcon={
            <View style={{flexDirection: 'row'}}>
              {showLoading && (
                <ActivityIndicator
                  key="loading"
                  style={StyleSheet.flatten([{marginRight: 5}, loadingStyle])}
                  {...otherLoadingProps}
                />
              )}
              {!isEmpty &&
                renderNode(
                  Icon,
                  clearIcon,
                  Object.assign(Object.assign({}, defaultClearIcon(theme)), {
                    key: 'cancel',
                    onPress: this.clear,
                  }),
                )}
            </View>
          }
          rightIconContainerStyle={StyleSheet.flatten([
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
          ])}
        />

        <View
          style={StyleSheet.flatten([
            styles.cancelButtonContainer,
            {
              opacity: this.state.cancelButtonWidth === null ? 0 : 1,
              right: hasFocus ? 0 : -this.state.cancelButtonWidth,
            },
          ])}
          onLayout={event =>
            this.setState({cancelButtonWidth: event.nativeEvent.layout.width})
          }>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={this.cancel}
            disabled={buttonDisabled}
            {...otherCancelButtonProps}>
            <View style={[buttonStyle, buttonDisabled && buttonDisabledStyle]}>
              <Text
                style={[
                  styles.buttonTextStyle,
                  buttonColor && {color: buttonColor},
                  buttonTextStyle,
                  buttonDisabled &&
                    (buttonDisabledTextStyle || styles.buttonTextDisabled),
                ]}>
                {cancelButtonTitle}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
SearchBar.defaultProps = {
  value: '',
  cancelButtonTitle: 'Cancel',
  loadingProps: {},
  cancelButtonProps: {},
  showLoading: false,
  onClear: () => null,
  onCancel: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
  searchIcon: {name: 'ios-search'},
  clearIcon: {name: 'ios-close-circle'},
  showCancel: false,
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  input: {
    marginLeft: 6,
    overflow: 'hidden',
  },
  inputContainer: {
    borderBottomWidth: 0,
    borderRadius: 9,
    minHeight: 36,
    marginLeft: 8,
    marginRight: 8,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
  buttonTextStyle: {
    color: '#007aff',
    textAlign: 'center',
    padding: 8,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
  },
  buttonTextDisabled: {
    color: '#cdcdcd',
  },
  cancelButtonContainer: {
    position: 'absolute',
  },
});
export default SearchBar;
