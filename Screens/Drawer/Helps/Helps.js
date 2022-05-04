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
import TextW from '../../../components/Gadgets/TextW';
import {Image} from 'react-native-elements';
import Globals from '../../../Ressources/Globals';
import {Linking} from 'react-native';
import {sendEmail} from '../../../Helpers/Utils';

function Helps(route) {
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);
  const mainItems = [
    {
      id: 1,
      title: 'Projet SWEDD',
      meta_thing: 'Natacha C. G. BAMEYNOU',
      icon: require('../../../assets/help_pc.png'),
      description: 'Qu’est-ce que le SWEDD-BENIN ?',
      onpress: () => {
        Linking.openURL(
          'https://swedd.bj/mot-de-la-coordonnatrice-du-projet-swedd-benin-a-loccasion-de-la-jif-2022/',
        );
      },
    },
    {
      id: 2,
      title: 'Contacter le siège',
      meta_thing: 'Natacha C. G. BAMEYNOU',
      icon: require('../../../assets/help_message.png'),
      description: 'Contactez-nous via un formulaire spécialement préparé',
      onpress: () => {
        Linking.openURL('https://swedd.bj/contact/');
      },
    },
    {
      id: 3,
      title: 'Feedback',
      meta_thing: 'Natacha C. G. BAMEYNOU',
      icon: require('../../../assets/help_envelop.png'),
      description: 'Discutez de votre préoccupation',
      onpress: () => {
        sendEmail(
          'solution@solutechcorporate.com',
          'SWedd Benin APPLICATION',
          'Hello , ',
        ).then(() => {
          console.log('Our email successful provided to device mail ');
        });
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
                      height: 70,
                      width: 70,
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
                  <TextW
                    style={stylesc.description}
                    text={item.description}
                    size={100}
                  />
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
                backgroundColor: 'rgba(32, 137, 220,.8)',
                zIndex: 9,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: -10,
                left: 6,
                height: 15,
                width: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                zIndex: 10,
              }}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            top: -90,
            width: '100%',
            paddingHorizontal: '8%',
          }}>
          {menu_main(mainItems)}
        </View>
      </View>
    </ScrollView>
  );
}

export default Helps;
