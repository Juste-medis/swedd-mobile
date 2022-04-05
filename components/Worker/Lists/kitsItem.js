import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleKitsItem as styles} from '../../../Ressources/Styles';
import Icono from 'react-native-vector-icons/Ionicons';

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
          size={90}
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
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default kitsItem;
