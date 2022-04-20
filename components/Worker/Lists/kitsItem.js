import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleKitsItem as styles} from '../../../Ressources/Styles';
import Icono from 'react-native-vector-icons/Ionicons';
import TextW from '../../Gadgets/TextW';

function kitsItem(route) {
  const {id, libelle} = route.inter_Collecteurs;
  //let {onclick} = route;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.main_ripple}
      onPress={() => {
        /*
        onclick({
          description,
          name,
          urlPhoto,
        });
*/
      }}>
      <View style={styles.def_avatar}>
        <Icono
          name="md-cube-outline"
          size={50}
          color={Globals.COLORS.primary}
        />
      </View>
      <View style={styles.main_container}>
        <View style={styles.desciption_container}>
          <Text
            style={{
              color: Globals.COLORS.arsenic,
              fontFamily: 'Lato-Black',
            }}>
            {libelle}
          </Text>
          <TextW
            style={styles.notification_description}
            text={`identifiant: ${id}`.replace(/(<([^>]+)>)/gi, '')}
            size={100}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default kitsItem;
