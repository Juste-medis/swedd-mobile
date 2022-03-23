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

function ControlBoard(route) {
  let profil = route.my_profil.account;
  console.log(route.my_profil);
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);

  let menuoth = [
    {
      icon: 'documents-outline',
      title: 'Fiches Total',
      variant: Globals.COLORS.primary,
      value: 30,
      onclick: () => {
        Linking.openURL('https://swedd.bj/faq/');
      },
    },
    {
      icon: 'md-eye-outline',
      title: 'Supervision en cour',
      value: profil.review_fiche,
      variant: 'rgb(255,193,7)',
      onclick: () => {
        Linking.openURL('https://swedd.bj/contact/');
        //route.navigation.navigate("About");
      },
    },
    {
      icon: 'checkmark-sharp',
      title: 'Validées',
      value: profil.accepted_fiche,
      variant: '#198754',
      onclick: () => {
        Linking.openURL('https://swedd.bj/presentation-du-projet/');
        //route.navigation.navigate("About");
      },
    },
    {
      icon: 'md-close',
      title: 'Rejetées',
      value: profil.rejected_fiche,
      variant: '#dc3545',
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
            <View style={{marginTop: 10, borderRadius: 20}}>
              <SimpleRipple
                style={[
                  styles.menu_item,
                  {
                    backgroundColor: item.variant,
                  },
                ]}
                onPress={() => {
                  item.onclick();
                }}
                rippleColor={item.variant}
                key={index}>
                <View style={styles.menu_item}>
                  <View style={stylesc.icon_containter}>
                    <Icon name={item.icon} size={35} color={item.variant} />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={styles.prop_unity_value}>{item.value}</Text>
                    <Text
                      style={{color: Globals.COLORS.white, marginStart: 12}}>
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
