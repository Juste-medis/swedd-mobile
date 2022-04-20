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
import FormationsItem from '../../../components/Worker/Lists/formationsItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fetcher';
import {styleCollecteursItem as styles} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {toast_message} from '../../../Helpers/Utils';
import EmptyThing from '../../../components/Gadgets/EmptyThing';
import LoadingDot from '../../../components/Gadgets/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-elements';
import Storer from '../../../API/storer';
import ToolItemLength from '../../../components/Gadgets/ToolItemLength';

let notides = {uri: '', text: 'toto'};
function Formations(route) {
  const [formations, setformations] = React.useState([]);
  const [spinner, setspinner] = React.useState(true);
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [page, setpage] = React.useState(1);

  React.useEffect(() => {
    //console.log(route.navigation.getParent());
    //route.navigation.getParent().setOptions({title: 'Animateur'});
    //route.navigation.setParams({title: 'Animateur'});
    _onSubmmitClick();
    return () => {};
  }, []);

  const _show_content = notif => {
    notides = notif;
    //setmodalVisible(true);
  };
  function _onSubmmitClick() {
    setspinner(true);

    Fetcher.Getformations(Globals.PROFIL_INFO.id, page)
      .then(res => {
        if (res['@type'] === 'hydra:Error') {
          toast_message(res['hydra:description']);
        } else {
          setpage(page + 1);
          const fetched = [...formations, ...res];
          setformations(fetched);
          if (page === 1) {
            Storer.storeData('@formations', fetched);
          }
        }
        setspinner(false);
      })
      .catch(async err => {
        setspinner(false);
        if (!Globals.INTERNET) {
          const cached = await Storer.getData('@formations');
          if (!cached) {
            toast_message(Globals.STRINGS.no_internet);
          } else {
            setformations(cached);
          }
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
          data={formations}
          ListHeaderComponent={
            <View style={{paddingHorizontal: 8}}>
              <ToolItemLength value={formations.length} label={'Formations'} />
            </View>
          }
          ListEmptyComponent={
            <EmptyThing
              style={{marginTop: 50}}
              message="Aucune formation dispensée !"
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
export default connect(mapStateToProps, mapDispatchToProps)(Formations);
