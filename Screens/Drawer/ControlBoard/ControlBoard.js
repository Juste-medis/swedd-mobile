/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {styleControlBoard as stylesc} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleRipple from '../../../components/Touchable/SimpleRipple';
import Fiches from '../../../Ressources/Data/Fiches';
function ControlBoard(route) {
  let profil = route.my_profil.account;
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);

  let menuoth = [
    {
      icon: 'documents-outline',
      title: 'Modèles de fiches',
      variant: Globals.COLORS.primary,
      value: Fiches().length,
      onclick: () => {
        route.navigation.navigate('FichesTemplates');
      },
    },
    ...[
      profil.user_type === 'facilitateur_1'
        ? {
            icon: 'md-eye-outline',
            title: 'En cour de validation',
            value: profil.ficheAttente,
            variant: 'rgb(255,193,7)',
            onclick: () => {
              route.navigation.navigate('FichesList', {fichestate: 'review'});
            },
          }
        : {},
    ],
    ...[
      profil.user_type === 'facilitateur_1'
        ? {
            icon: 'md-checkmark-circle',
            title: 'Validées',
            value: profil.ficheValide,
            variant: '#198754',
            onclick: () => {
              route.navigation.navigate('FichesList', {fichestate: 'accepted'});
            },
          }
        : {},
    ],
    ...[
      profil.user_type === 'facilitateur_1'
        ? {
            icon: 'md-close',
            title: 'Rejetées',
            value: profil.ficheRejetes,
            variant: '#dc3545',
            onclick: () => {
              route.navigation.navigate('FichesList', {fichestate: 'rejected'});
            },
          }
        : {},
    ],
    {
      icon: 'document',
      title: 'Fiches Entrées',
      value: profil.ficheRemplies,
      variant: Globals.COLORS.light_blue,
      onclick: () => {
        route.navigation.navigate('FichesList', {fichestate: 'all'});
      },
    },
    {
      icon: 'md-person-sharp',
      title: 'Animateurs',
      value: profil.collecteurs,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        route.navigation.navigate('Collecteurs');
      },
    },
    {
      icon: 'md-woman-outline',
      title: 'Bénéficiaires',
      value: profil.nbrBeneficiaire,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        route.navigation.navigate('Beneficiaires');
      },
    },
    {
      icon: 'ios-book-outline', //md-school-outline
      title: 'Formations',
      value: profil.nbreFormations,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        route.navigation.navigate('Formations');
      },
    },
    {
      icon: 'ios-layers',
      title: 'Kits',
      value: profil.kits,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        route.navigation.navigate('Kits');
      },
    },
  ];
  const menu_main = data => {
    return (
      <View style={{width: '100%'}}>
        {data.map((item, index) => {
          return item.title ? (
            <View
              style={{
                marginTop: 10,
                borderRadius: 10,
              }}
              key={item.title}>
              <SimpleRipple
                style={[
                  styles.menu_item,
                  {
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: Globals.COLORS.aliceblue,
                  },
                ]}
                onPress={() => {
                  item.onclick();
                }}
                rippleColor={item.variant}>
                <View style={styles.menu_item}>
                  <View style={stylesc.icon_containter}>
                    <Icon name={item.icon} size={35} color={item.variant} />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{
                        ...styles.prop_unity_value,
                        color: item.variant,
                        marginTop: -5,
                      }}>
                      {item.value}
                    </Text>
                    <Text
                      style={{
                        marginStart: 12,
                        fontFamily: 'Lato-Regular',
                        color: item.variant,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </SimpleRipple>
            </View>
          ) : null;
        })}
      </View>
    );
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={{height: '100%', backgroundColor: Globals.COLORS.surface}}>
      <View style={[styles.main_container, {backgroundColor: null}]}>
        {menu_main(menuoth)}
      </View>
    </ScrollView>
  );
}
const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({AddProfilItem}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ControlBoard);
