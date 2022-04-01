import React from 'react';
import {View, Text} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleNotificationItem as styles} from '../../../Ressources/Styles';
import TextW from '../../Gadgets/TextW';
import {date_to_local_string} from '../../../Helpers/Utils';
import SimpleRipple from '../../Touchable/SimpleRipple';

function NotificationItem(route) {
  const {id, expediteur, date_envoi, description, date_lecture} =
    route.inter_notification;
  let {onclick} = route,
    read = date_lecture.length > 0;

  let localdate = new Date(date_envoi);

  return (
    <SimpleRipple
      style={[
        styles.main_ripple,
        {
          backgroundColor: !read
            ? Globals.COLORS.white
            : Globals.COLORS.light_grey,
        },
      ]}
      onPress={() => {
        onclick({description, expediteur, date_envoi});
      }}>
      <View style={styles.def_avatar}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Lato-Bold',
          }}>
          {expediteur.substr(0, 2)}
        </Text>
      </View>
      <View style={styles.main_container}>
        <View style={styles.desciption_container}>
          <TextW
            style={styles.notification_description}
            text={description.replace(/(<([^>]+)>)/gi, '')}
            size={100}
          />
          <Text
            style={{
              color: Globals.COLORS.arsenic,
              fontFamily: 'Lato-Black',
              marginTop: 20,
            }}>
            {date_to_local_string(localdate, true)}
          </Text>
        </View>
      </View>
    </SimpleRipple>
  );
}

export default NotificationItem;
