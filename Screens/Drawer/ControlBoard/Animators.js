/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Modal,
  Text,
  ScrollView,
  View,
} from 'react-native';
import AnimatorsItem from '../../../components/Worker/Lists/AnimatorsItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fakeApi';
import {styleAnimatorsItem as styles} from '../../../Ressources/Styles';
import Storer from '../../../API/storer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {date_to_local_string, toast_message} from '../../../Helpers/Utils';
import EmptyThing from '../../../components/Tools/EmptyThing';
import LoadingDot from '../../../components/Tools/Loading';
import Icon from 'react-native-vector-icons/Ionicons';

let notides = {uri: '', text: 'toto'};
function Animators(route) {
  const [Animators, setAnimators] = React.useState(
    Globals.PROFIL_INFO.animators,
  );
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
    Storer.getData('@Animators')
      .then(data => {
        if (data) {
          setAnimators(data);
          setspinner(false);
        } else {
          Fetcher.GetMessages('Animators')
            .then(res => {
              if (res.messages) {
                setAnimators(res.messages);
                Storer.storeData('@Animators', res.messages);
                route.AddProfilItem({key: 'Animators', data: 0});
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
          data={Animators}
          ListEmptyComponent={
            <EmptyThing style={{marginTop: 50}} message="Aucun Animateur !" />
          }
          keyExtractor={item => `notitem${item.id}`}
          renderItem={({item}) => (
            <AnimatorsItem inter_Animators={item} onclick={_show_content} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
        />
      )}
      <Modal
        style={{position: 'absolute', bottom: 0}}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <ScrollView style={{paddingTop: 40, paddingHorizontal: 20}}>
          <Icon
            style={{marginBottom: 30}}
            name="arrow-back"
            size={30}
            color="black"
            onPress={e => {
              setmodalVisible(!modalVisible);
            }}
          />
          <View style={styles.notif_meta_container}>
            <Text style={styles.Animators_title}>De: </Text>
            <Text style={styles.notif_infotag}>{notides?.expediteur}</Text>
          </View>
          <View style={{...styles.notif_meta_container, marginBottom: 50}}>
            <Text style={styles.Animators_title}>Date: </Text>
            <Text style={styles.notif_infotag}>
              {date_to_local_string(notides?.date_envoi)}{' '}
            </Text>
          </View>
          <Text style={styles.Animators_description}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Animators);
