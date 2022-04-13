import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleformationsItem as styles} from '../../../Ressources/Styles';
import {date_to_local_string} from '../../../Helpers/Utils';
import Icono from 'react-native-vector-icons/Ionicons';
import {styleControlBoard as stylesc} from '../../../Ressources/Styles';
import TextW from '../../Gadgets/TextW';

function myfichesItem(route) {
  const {fichestate, id, meta_thing, onclick, title} = route.inter_Collecteurs;
  let ficheprop = {
    icon: '',
    variant: '',
  };

  switch (fichestate) {
    case 'review':
      ficheprop.icon = 'file1';
      ficheprop.variant = '255,193,7';
      break;

    case 'rejected':
      ficheprop.icon = 'filetext1';
      ficheprop.variant = '220,53,69';
      break;

    case 'accepted':
      ficheprop.icon = 'profile';
      ficheprop.variant = '25,135,84';
      break;
  }

  return (
    <View style={{width: '100%'}}>
      <View key={id} style={stylesc.main_menu_indider}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.menu_item, stylesc.menu_item]}
          onPress={() => {
            onclick({id});
          }}
          rippleColor={ficheprop.variant}>
          <View style={stylesc.main_menu_top}>
            <View
              style={{
                ...stylesc.icon_containter_ficheli,
                backgroundColor: `rgba(${ficheprop.variant},.1)`,
              }}>
              <Icono
                name={ficheprop.icon}
                size={50}
                color={`rgb(${ficheprop.variant})`}
              />
            </View>
            <Text
              style={{
                ...stylesc.prop_unity_value,
              }}>
              {meta_thing}
            </Text>
          </View>
          <View style={stylesc.main_menu_bottom}>
            <Text
              style={{
                ...styles.prop_unity_value,
                ...stylesc.prop_unity_valuei,
              }}>
              {title}
            </Text>
            <TextW style={stylesc.description} text="toto" size={100} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default myfichesItem;
