/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import MyfichesItem from '../../../components/Worker/Lists/myfichesItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fetcher';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {alert_message, toast_message} from '../../../Helpers/Utils';
import EmptyThing from '../../../components/Gadgets/EmptyThing';
import LoadingDot from '../../../components/Gadgets/Loading';
import Storer from '../../../API/storer';
import {styleCollecteursItem as styles} from '../../../Ressources/Styles';
import ToolItemLength from '../../../components/Gadgets/ToolItemLength';
import Fiches from '../../../Ressources/Data/Fiches';
import RNReastart from 'react-native-restart';

function FichesList({route, navigation}) {
  const fichestate = route.params.fichestate;
  const [fiches, setfiches] = React.useState([]);
  const [spinner, setspinner] = React.useState(true);
  const [page, setpage] = React.useState(1);
  const [modalVisible, setmodalVisible] = React.useState({});

  React.useEffect(() => {
    //console.log(route.navigation.getParent());
    //route.navigation.getParent().setOptions({title: 'Animateur'});
    //route.navigation.setParams({title: 'Animateur'});
    _onSubmmitClick();
    return () => {
      setfiches([]);
    };
  }, []);

  const _show_content = values => {
    let selected = Fiches().find(
      mes =>
        mes.id === values.categorieFiche?.id ||
        mes.id === values._categorieFiche?.id,
    );
    navigation.navigate('FicheForm', {set: selected, values, fichestate});
  };

  const _trigger_actions = values => {
    setmodalVisible(values);
  };

  function _onSubmmitClick() {
    setspinner(true);
    Fetcher.GetFiches(Globals.PROFIL_INFO.id, page, fichestate)
      .then(async res => {
        if (res['@type'] === 'hydra:Error') {
          toast_message(res['hydra:description']);
        } else {
          let fetched = [...fiches, ...res];
          if (page === 1) {
            Storer.storeData('@OfflineFiche', res);
            const cachedque = await Storer.getData('@QuedFiche');
            if (cachedque) {
              fetched = [...cachedque, ...fetched];
            }
          }
          setpage(page + 1);
          setfiches(fetched);
        }
        setspinner(false);
      })
      .catch(async err => {
        setspinner(false);
        if (!Globals.INTERNET) {
          const cached = await Storer.getData('@OfflineFiche');
          if (!cached) {
            toast_message(Globals.STRINGS.no_internet);
          } else {
            setfiches(cached);
          }
        } else if (err?.message?.includes("Unrecognized token '<'")) {
          Storer.removeData();
          RNReastart.Restart();
          return false;
        } else {
          toast_message(`${err}`);
        }
      });
  }
  async function _deleteFiche() {
    setspinner(true);
    if (modalVisible._unsynced) {
      const fichesi = await Storer.getData('@QuedFiche');
      if (fichesi && fichesi.length > 0) {
        let fitered = fichesi.filter(
          (mes, i) => mes._date !== modalVisible._date,
        );
        await Storer.storeData('@QuedFiche', fitered);
        _onSubmmitClick();
      }
    } else {
      Fetcher.DeleteFiche(modalVisible.id)
        .then(resi => {
          Fetcher.SyncUserData();
          _onSubmmitClick();
        })
        .catch(err => {
          setspinner(false);
          if (!Globals.INTERNET) {
            toast_message(Globals.STRINGS.no_internet);
          } else {
            toast_message(`${err}`);
          }
        });
    }
  }
  const renderFooter = () => {
    return <View style={styles.footer}>{spinner ? <LoadingDot /> : null}</View>;
  };

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
          style={{
            flex: 1,
            paddingTop: 10,
            backgroundColor: Globals.COLORS.white,
          }}
          ListHeaderComponent={
            <View style={{paddingHorizontal: 8}}>
              <ToolItemLength
                value={fiches.length}
                label={Globals.STRINGS.fichelistLAbel[fichestate]}
              />
            </View>
          }
          data={fiches}
          ListEmptyComponent={
            <EmptyThing
              style={{marginTop: 50}}
              message="Aucune fiche enrégistrée !"
            />
          }
          renderItem={({item}) => (
            <MyfichesItem
              fichestate={fichestate}
              inter_Collecteurs={item}
              onclick={_show_content}
              _trigger_actions={_trigger_actions}
            />
          )}
          ListFooterComponent={renderFooter}
          keyExtractor={item => {
            return `notitem${item.id}`;
          }}
          onEndReachedThreshold={0.5}
        />
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.dateAjout !== undefined}
        onRequestClose={() => {
          setmodalVisible(false);
        }}>
        <View style={selfstyles.centeredView}>
          <View style={selfstyles.modalView}>
            <Pressable
              style={[selfstyles.button, selfstyles.buttonModify]}
              onPress={() => {
                setmodalVisible(false);
                _show_content(modalVisible);
              }}>
              <Text style={selfstyles.textStyle}>Modifier</Text>
            </Pressable>
            <Pressable
              style={[selfstyles.button, selfstyles.buttonDelete]}
              onPress={() => {
                setmodalVisible(false);
                alert_message(
                  'suppression',
                  'êtes-vous sûr de supprimer la fiche ?',
                  'confirmer',
                  _deleteFiche,
                );
              }}>
              <Text style={selfstyles.textStyle}>Supprimer</Text>
            </Pressable>
            <Pressable
              style={[selfstyles.button, selfstyles.buttonClose]}
              onPress={() => setmodalVisible(false)}>
              <Text style={selfstyles.textClose}>Annuler</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const selfstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 30,
    width: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 12,
    width: '100%',
  },
  buttonClose: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
  },
  buttonModify: {
    backgroundColor: '#2196F3',
  },
  buttonDelete: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textClose: {
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({AddProfilItem}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FichesList);
