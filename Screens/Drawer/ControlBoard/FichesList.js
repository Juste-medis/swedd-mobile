/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import MyfichesItem from '../../../components/Worker/Lists/myfichesItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fakeApi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {toast_message} from '../../../Helpers/Utils';
import EmptyThing from '../../../components/Gadgets/EmptyThing';
import LoadingDot from '../../../components/Gadgets/Loading';
function FichesList({route}) {
  const fichestate = route.params.fichestate;
  const [fiches, setfiches] = React.useState([]);
  const [spinner, setspinner] = React.useState(true);

  React.useEffect(() => {
    //console.log(route.navigation.getParent());
    //route.navigation.getParent().setOptions({title: 'Animateur'});
    //route.navigation.setParams({title: 'Animateur'});
    _onSubmmitClick();
    return () => {};
  }, []);

  const _show_content = param => {
    let selected = fiches.find(mes => mes.id === param.id);
    route.navigation.navigate('FicheForm', {set: selected, selected});
    //setmodalVisible(true);
  };

  function _onSubmmitClick() {
    Fetcher.GetFiches({fichestate})
      .then(res => {
        if (res.error) {
          toast_message(res.error);
        } else if (res.fiches) {
          setfiches(res.fiches);
          //Storer.storeData('@fiches', res.beneficiaires);
        }
        setspinner(false);
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
          data={fiches}
          ListEmptyComponent={
            <EmptyThing
              style={{marginTop: 50}}
              message="Aucune fiches enrégistrée !"
            />
          }
          keyExtractor={item => `notitem${item.id}`}
          renderItem={({item}) => (
            <MyfichesItem
              fichestate={fichestate}
              inter_Collecteurs={item}
              onclick={_show_content}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
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
