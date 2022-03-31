import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleNotificationItem as styles} from '../../../Ressources/Styles';
import TextW from '../../Tools/TextW';
import {Image} from 'react-native-elements';

function AnimatorsItem(route) {
  const {id, photo, name, description} = route.inter_Animators;
  let {onclick} = route;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.main_ripple}
      onPress={() => {
        onclick({description, name, photo});
      }}>
      <View style={styles.title_container}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.def_avatar}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.main_container}>
        <View style={styles.desciption_container}>
          <Text
            style={{
              color: Globals.COLORS.arsenic,
              fontFamily: 'Lato-Bold',
            }}>
            {name}
          </Text>
          <TextW
            style={styles.notification_description}
            text={description.replace(/(<([^>]+)>)/gi, '')}
            size={100}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default AnimatorsItem;
