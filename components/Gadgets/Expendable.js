import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Globals from '../Globals';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Expendable extends React.Component {
  constructor(props) {
    super(props);
    this.icons = {
      up: <Icon name="caretup" size={30} color={Globals.COLORS.pur_green} />,
      down: (
        <Icon name="caretdown" size={30} color={Globals.COLORS.pur_green} />
      ),
    };
    this.state = {
      title: props.title,
      expanded: false,
      animation: 40,
    };
  }
  _toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
      animation: finalValue,
    });
  }
  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }
  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  }

  render() {
    let icon = this.icons.down;
    if (this.state.expanded) {
      icon = this.icons.up;
    }
    return (
      <View
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : Globals.COLORS.light_green,
          margin: 10,
          overflow: 'hidden',
          height: this.state.animation,
        }}>
        <View onLayout={this._setMinHeight.bind(this)}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.titleContainer}
            onPress={this._toggle.bind(this)}
            underlayColor="#f1f1f1">
            <Text style={styles.title}>{this.state.title}</Text>
            {icon}
          </TouchableOpacity>
        </View>
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

export default Expendable;
