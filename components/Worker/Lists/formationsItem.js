import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleformationsItem as styles} from '../../../Ressources/Styles';
import {date_to_local_string} from '../../../Helpers/Utils';
import Icono from 'react-native-vector-icons/Ionicons';

function formationsItem(route) {
  const {
    libelle,
    dateDebut,
    dateFin,
    formationCentres,
    urlPhoto,
    name,
    description,
  } = route.inter_Collecteurs;

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
      <View style={styles.def_avatar}>
        <Icono
          name="ios-school-outline"
          size={50}
          color={Globals.COLORS.primary}
        />
      </View>
      <View style={styles.main_container}>
        <View style={styles.desciption_container}>
          <Text style={styles.props_title}>{libelle}</Text>
          <Text style={styles.props_title}>
            Du:{' '}
            <Text style={styles.props_value}>
              {date_to_local_string(dateDebut)}
            </Text>
          </Text>
          <Text style={styles.props_title}>
            Au:{' '}
            <Text style={styles.props_value}>
              {date_to_local_string(dateFin)}
            </Text>
          </Text>
          <Text style={styles.props_title}>
            Au: <Text style={styles.props_value}>{formationCentres}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default formationsItem;
