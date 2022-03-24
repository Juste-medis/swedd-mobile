import React from 'react';
import {ScrollView, Text, View, Linking} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {styleControlBoard as stylesc} from '../../../Ressources/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleRipple from '../../../components/Touchable/SimpleRipple';

function FicheForm(route) {
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
        route.navigation.navigate('FichesTemplate');
      },
    },
    {
      icon: 'md-eye-outline',
      title: 'Supervision en cour',
      value: 1,
      variant: 'rgb(255,193,7)',
      onclick: () => {
        Linking.openURL('https://swedd.bj/contact/');
        //route.navigation.navigate("About");
      },
    },
  ];

  const menu_main = data => {
    return (
      <View style={{width: '100%'}}>
        {data.map((item, index) => {
          return (
            <View style={{marginTop: 10, borderRadius: 20}} key={index}>
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
        <Text>so we start</Text>
      </View>
    </ScrollView>
  );
}

export default FicheForm;
