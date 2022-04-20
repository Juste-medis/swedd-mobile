import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleCollecteursItem as styles} from '../../../Ressources/Styles';
import TextW from '../../Gadgets/TextW';
import {Image} from 'react-native-elements';
import Icono from 'react-native-vector-icons/EvilIcons';

function areEqual(prevProps, nextProps) {
  return prevProps.contacts === nextProps.contacts;
  // the component will be updated only on `contact` props changes.
}
export default memo(CollecteursItem, areEqual);

function CollecteursItem(route) {
  let {onclick, role} = route;
  const {
    id,
    urlPhotoFille,
    facilitateur,
    quartier,
    prenom,
    sexe,
    nom,
    description,
  } = route.inter_Collecteurs;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.main_ripple}
      onPress={() => {
        onclick({
          description:
            description ||
            (role === 'colecttor'
              ? `identifiant: ${id} \nSexe : ${sexe} \nFacilitateur : ${facilitateur?.prenom} ${facilitateur?.nom} `
              : `identifiant: ${id} \nSexe : ${sexe} \nQuartier : ${quartier.libelle} `),
          name: `${nom} ${prenom}`,
          urlPhoto: urlPhotoFille || 'https://picsum.photos/200',
        });
      }}>
      <Image
        source={{
          uri: urlPhotoFille || 'https://picsum.photos/200',
        }}
        style={styles.def_avatar}
        PlaceholderContent={
          <Icono name="spinner" size={50} color={Globals.COLORS.blue_dark} />
        }
      />
      <View style={styles.main_container}>
        <View style={styles.desciption_container}>
          <Text
            style={{
              color: Globals.COLORS.arsenic,
              fontFamily: 'Lato-Black',
            }}>
            {nom + ' ' + prenom}
          </Text>
          <TextW
            style={styles.notification_description}
            text={(description || `identifiant: ${id}`).replace(
              /(<([^>]+)>)/gi,
              '',
            )}
            size={100}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
