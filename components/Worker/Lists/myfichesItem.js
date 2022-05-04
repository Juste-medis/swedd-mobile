import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {stylemyFicheItem as styles} from '../../../Ressources/Styles';
import {date_to_local_string} from '../../../Helpers/Utils';
import Icono from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styleControlBoard as stylesc} from '../../../Ressources/Styles';
import TextW from '../../Gadgets/TextW';
import Globals from '../../../Ressources/Globals';

function areEqual(prevProps, nextProps) {
  return prevProps.fichestate === nextProps.fichestate;
}

function myfichesItem(route) {
  let {_unsynced, fichestate, dateAjout, categorieFiche, _categorieFiche, id} =
      route.inter_Collecteurs,
    {onclick, _trigger_actions} = route;
  fichestate = fichestate || route.fichestate;
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
    default:
      ficheprop.icon = 'profile';
      ficheprop.variant = '32,137,220';
      break;
  }
  if (_unsynced) {
    ficheprop.variant = '125,132,146';
  }

  return (
    <View style={styles.main_container}>
      <View key={id} style={styles.main_menu_indider}>
        <Text
          style={{
            ...styles.statetext,
            color: `rgba(${ficheprop.variant},1)`,
            backgroundColor: `rgba(${ficheprop.variant},.1)`,
          }}>
          {_unsynced ? (
            <Icon
              name="signal-off"
              size={20}
              color={`rgb(${ficheprop.variant})`}
            />
          ) : (
            Globals.STRINGS.ficheStateLAbel[fichestate]
          )}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.menu_item, stylesc.menu_item]}
          onPress={() => {
            onclick(route.inter_Collecteurs);
          }}
          onLongPress={() => {
            _trigger_actions(route.inter_Collecteurs);
          }}
          rippleColor={ficheprop.variant}>
          <View style={stylesc.main_menu_top}>
            <View
              style={{
                ...stylesc.icon_containter_ficheli,
                backgroundColor: `rgba(${ficheprop.variant},.1)`,
                height: 60,
              }}>
              <Icono
                name={ficheprop.icon}
                size={40}
                color={`rgb(${ficheprop.variant})`}
              />
            </View>
            <View style={stylesc.main_menu_bottom}>
              <Text
                style={{
                  ...stylesc.prop_unity_value,
                  fontFamily: 'Lato-Bold',
                }}>
                Fiche #000{id}
              </Text>
              <Text
                style={{
                  ...styles.title_text,
                  ...stylesc.prop_unity_valuei,
                  paddingStart: 8,
                }}>
                {categorieFiche?.libelle || _categorieFiche?.libelle}
              </Text>
            </View>
          </View>
          <View style={stylesc.main_menu_bottom}>
            <TextW
              style={stylesc.description}
              text={date_to_local_string(dateAjout)}
              size={100}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(myfichesItem, areEqual);
