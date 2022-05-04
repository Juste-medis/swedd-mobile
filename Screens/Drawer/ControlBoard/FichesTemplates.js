import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {styleControlBoard as stylesc} from '../../../Ressources/Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Fiches from '../../../Ressources/Data/Fiches';
import TextW from '../../../components/Gadgets/TextW';

function FichesTemplates(route) {
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);

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
                  route.navigation.navigate('FicheForm', {set: item});
                }}
                rippleColor={item.variant}>
                <View style={stylesc.main_menu_top}>
                  <View
                    style={{
                      ...stylesc.icon_containter_ficheli,
                      backgroundColor: `rgba(${item.variant},.1)`,
                    }}>
                    <Icon
                      name={item.icon}
                      size={50}
                      color={`rgb(${item.variant})`}
                    />
                  </View>
                  <Text
                    style={{
                      ...stylesc.prop_unity_value,
                    }}>
                    {item.meta_thing}
                  </Text>
                </View>
                <View style={stylesc.main_menu_bottom}>
                  <Text
                    style={{
                      ...styles.prop_unity_value,
                      ...stylesc.prop_unity_valuei,
                      paddingStart: 0,
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
      <View style={[styles.main_container, {backgroundColor: 'white'}]}>
        {menu_main(Fiches())}
      </View>
    </ScrollView>
  );
}

export default FichesTemplates;
