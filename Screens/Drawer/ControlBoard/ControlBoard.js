import React from 'react';
import {ScrollView, Text, View, Linking} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {styleControlBoard as stylesc} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import Icon from 'react-native-vector-icons/Ionicons';
import {onShare} from '../../../Helpers/Utils';
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
      value: Fiches.length,
      onclick: () => {
        route.navigation.navigate('FichesTemplates');
      },
    },
    {
      icon: 'md-eye-outline',
      title: 'Supervision en cour',
      value: profil.review_fiche.length,
      variant: 'rgb(255,193,7)',
      onclick: () => {
        Linking.openURL('https://swedd.bj/contact/');
        //route.navigation.navigate("About");
      },
    },
    {
      icon: 'checkmark-sharp',
      title: 'Validées',
      value: profil.accepted_fiche.length,
      variant: '#198754',
      onclick: () => {
        Linking.openURL('https://swedd.bj/presentation-du-projet/');
        //route.navigation.navigate("About");
      },
    },
    {
      icon: 'md-close',
      title: 'Rejetées',
      value: profil.rejected_fiche.length,
      variant: '#dc3545',
      onclick: () => {
        onShare('SweddMobile | tres cool');
      },
    },
    {
      icon: 'md-person-sharp',
      title: 'Animateurs',
      value: profil.animators.length,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        onShare('SweddMobile | tres cool');
      },
    },
    {
      icon: 'md-woman-outline',
      title: 'Bénéficiaires',
      value: profil.beneficiaires.length,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        onShare('SweddMobile | tres cool');
      },
    },
    {
      icon: 'ios-book-outline', //md-school-outline
      title: 'Formations',
      value: profil.formations.length,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        onShare('SweddMobile | tres cool');
      },
    },
    {
      icon: 'ios-layers',
      title: 'Kits',
      value: profil.kits.length,
      variant: Globals.COLORS.arsenic,
      backgroundColor: 'white',
      onclick: () => {
        onShare('SweddMobile | tres cool');
      },
    },
  ];

  const menu_main = data => {
    return (
      <View style={{width: '100%'}}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                marginTop: 10,
                borderRadius: 20,
              }}
              key={item.title}>
              <SimpleRipple
                style={[
                  styles.menu_item,
                  {
                    backgroundColor: item.backgroundColor || item.variant,
                    borderWidth: item.backgroundColor ? 2 : 0,
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
                    }}>
                    <Text
                      style={{
                        ...styles.prop_unity_value,
                        color: item.backgroundColor ? item.variant : 'white',
                      }}>
                      {item.value}
                    </Text>
                    <Text
                      style={{
                        color: item.backgroundColor ? item.variant : 'white',
                        marginStart: 12,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </SimpleRipple>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView
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
