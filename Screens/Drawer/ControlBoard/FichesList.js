/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import MyfichesItem from '../../../components/Worker/Lists/myfichesItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fetcher';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {toast_message} from '../../../Helpers/Utils';
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

  React.useEffect(() => {
    //console.log(route.navigation.getParent());
    //route.navigation.getParent().setOptions({title: 'Animateur'});
    //route.navigation.setParams({title: 'Animateur'});
    _onSubmmitClick();
    return () => {};
  }, []);

  const _show_content = values => {
    let selected = Fiches.find(
      mes =>
        mes.id === values.categorieFiche?.id ||
        mes.id === values._categorieFiche?.id,
    );
    navigation.navigate('FicheForm', {set: selected, values});
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
              message="Aucune fiches enrégistrée !"
            />
          }
          renderItem={({item}) => (
            <MyfichesItem
              fichestate={fichestate}
              inter_Collecteurs={item}
              onclick={_show_content}
            />
          )}
          ListFooterComponent={renderFooter}
          keyExtractor={item => {
            return `notitem${item.dateAjout}`;
          }}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
}
const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({AddProfilItem}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FichesList);
