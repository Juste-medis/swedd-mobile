/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleAccordian as styles} from '../../Ressources/Styles';

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.courid = props.courid;
    this.state = {
      data: props.data,
      expanded: false,
      selected: 0,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  show_Main = () => {
    return this.state.data.map((item, index) => {
      let sel = index + 1;
      return (
        <View
          style={styles.main_touchable}
          key={`accoit${this.props.section_id}-${sel}`}>
          <View style={styles.touchable_container}>
            <Icon name="md-pulse-sharp" size={18} color="black" />
            <Text style={styles.index_text}>{item}</Text>
          </View>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
          style={[
            styles.row,
            {
              paddingVertical: 10,
            },
          ]}
          activeOpacity={1}
          onPress={() => this.toggleExpand()}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Lato-Regular',
              marginRight: 10,
            }}>
            Observations
          </Text>
          <Icon
            name={
              this.state.expanded ? 'caret-down-sharp' : 'caret-forward-sharp'
            }
            size={18}
            color="white"
          />
        </TouchableOpacity>
        <View
          style={[
            styles.lesson_heberger,
            {
              height: this.state.expanded ? null : 0,
              borderBottomWidth: this.state.expanded ? 2 : 0,
            },
          ]}>
          {this.show_Main()}
        </View>
      </View>
    );
  }
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}
export default Accordian;
