import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {styleHelps as stylesc} from '../../../Ressources/Styles';
import {Image} from 'react-native-elements';
import Globals from '../../../Ressources/Globals';
import {Linking} from 'react-native';

function About(route) {
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);
  const mainItems = [
    {
      id: 1,
      title: 'Sewdd Bénin App 1.0',
      meta_thing: 'Natacha C. G. BAMEYNOU',
      icon: require('../../../assets/mobile_about.png'),
      description: `L'application mobile SweddBébinApp vous permet de collecter et de saisir les informations relatives aux enquêtes.
    \nL'objectif de devellopement du projet est d'Accroître l’autonomisation des femmes et des adolescentes et leur accès à des services de santé reproductive, infantile et maternelle de qualité, et à améliorer la production et le partage des connaissances au niveau régional ainsi que la capacité et la coordination régionale
    \nPour une meilleure expérience, lors de l'utilisation de l'application, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables. Les informations que nous demandons seront conservées par nous et utilisées comme décrit dans cette politique de confidentialité.
      `,
      onpress: () => {
        Linking.openURL(
          'http://play.google.com/store/apps/details?id=com.investigation.sweddmobileapp',
        );
      },
    },
  ];

  const menu_main = data => {
    return (
      <View style={{width: '100%'}}>
        {data.map((item, index) => {
          return (
            <View key={item.id} style={stylesc.main_menu_indider}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.menu_item, stylesc.menu_item]}
                onPress={() => {
                  item.onpress();
                }}
                rippleColor={item.variant}>
                <View style={stylesc.main_menu_top}>
                  <Image
                    source={item.icon}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 70,
                    }}
                    resizeMode="contain"
                    height={50}
                    width={50}
                  />
                </View>
                <View style={stylesc.main_menu_bottom}>
                  <Text
                    style={{
                      ...styles.prop_unity_value,
                      ...stylesc.prop_unity_valuei,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={stylesc.description} size={100}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={stylesc.main_container}>
      <View
        style={[styles.main_container, {backgroundColor: 'white', padding: 0}]}>
        <View style={{width: '100%'}}>
          <ImageBackground
            resizeMode="cover"
            style={{
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
            source={Globals.IMAGES.SPLASH}>
            <View style={{height: 250, width: 10}} />
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(32, 137, 220,1)',
                zIndex: 9,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 3,
                left: 6,
                height: 10,
                width: 10,
                backgroundColor: 'white',
                zIndex: 10,
              }}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            top: -200,
            width: '100%',
            paddingHorizontal: '8%',
          }}>
          {menu_main(mainItems)}
        </View>
      </View>
    </ScrollView>
  );
}

export default About;
