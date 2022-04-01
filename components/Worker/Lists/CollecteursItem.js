import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleCollecteursItem as styles} from '../../../Ressources/Styles';
import TextW from '../../Gadgets/TextW';
import {Image} from 'react-native-elements';

function CollecteursItem(route) {
  const {id, urlPhoto, name, description} = route.inter_Collecteurs;
  let {onclick} = route;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.main_ripple}
      onPress={() => {
        onclick({
          description,
          name,
          urlPhoto,
        });
      }}>
      <Image
        source={{
          uri: urlPhoto,
        }}
        style={styles.def_avatar}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.main_container}>
        <View style={styles.desciption_container}>
          <Text
            style={{
              color: Globals.COLORS.arsenic,
              fontFamily: 'Lato-Black',
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

export default CollecteursItem;
