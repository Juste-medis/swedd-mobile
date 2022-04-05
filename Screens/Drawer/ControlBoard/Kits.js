/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Modal,
  Text,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import FormationsItem from '../../../components/Worker/Lists/kitsItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fakeApi';
import {styleCollecteursItem as styles} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {toast_message} from '../../../Helpers/Utils';
import EmptyThing from '../../../components/Gadgets/EmptyThing';
import LoadingDot from '../../../components/Gadgets/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-elements';

let notides = {uri: '', text: 'toto'};
function Kits(route) {
  const [kits, setkits] = React.useState([]);
  const [spinner, setspinner] = React.useState(true);
  const [modalVisible, setmodalVisible] = React.useState(false);

  React.useEffect(() => {
    //console.log(route.navigation.getParent());
    //route.navigation.getParent().setOptions({title: 'Animateur'});
    //route.navigation.setParams({title: 'Animateur'});
    _onSubmmitClick();
    return () => {};
  }, []);

  const _show_content = notif => {
    notides = notif;
    setmodalVisible(true);
  };
  function _onSubmmitClick() {
    Fetcher.Getkits()
      .then(res => {
        if (res.kits) {
          setkits(res.kits);
          //Storer.storeData('@kits', res.beneficiaires);
        }
        setspinner(false);
      })
      .catch(err => {
        setspinner(false);
        if (!Globals.INTERNET) {
          toast_message(Globals.STRINGS.no_internet);
          route.navigation.goBack();
        } else {
          toast_message(`${err}`);
        }
      });
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: Globals.COLORS.white,
        flex: 1,
      }}>
      {spinner ? (
        <LoadingDot />
      ) : (
        <FlatList
          style={{flex: 1, backgroundColor: Globals.COLORS.white}}
          data={kits}
          ListEmptyComponent={
            <EmptyThing
              style={{marginTop: 50}}
              message="Aucun Kit Enrégistré !"
            />
          }
          keyExtractor={item => `notitem${item.id}`}
          renderItem={({item}) => (
            <FormationsItem inter_Collecteurs={item} onclick={_show_content} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
        />
      )}
      <Modal
        style={{position: 'absolute', bottom: 0, paddingVertical: 40}}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}>
          <Icon
            style={{marginBottom: 6, paddingTop: 40}}
            name="arrow-back"
            size={30}
            color="black"
            onPress={e => {
              setmodalVisible(!modalVisible);
            }}
          />
          <View style={styles.notif_meta_container}>
            <Image
              source={{
                uri: notides?.urlPhoto,
              }}
              style={{
                ...styles.def_avatar,
                height: 200,
                width: 200,
                borderRadius: 10,
              }}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="contain"
            />
            <Text style={styles.notif_infotag}>{notides?.name}</Text>
          </View>
          <Text style={styles.Collecteurs_description}>
            {notides?.description}
          </Text>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}
const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({AddProfilItem}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Kits);
