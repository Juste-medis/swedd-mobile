import * as React from 'react';

import {View, TouchableOpacity, Image} from 'react-native';

export default function HamburgerIcon(props) {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('../../Images/drawable/drawer_2.jpeg')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
}
