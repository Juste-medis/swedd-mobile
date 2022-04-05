import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DynamicForm from '../../../components/Formifyer/DynamicForm/DynamicForm';
import {flatArrayBykey, toast_message} from '../../../Helpers/Utils';
import {styleFicheForm as styles} from '../../../Ressources/Styles';
import Globals from '../../../Ressources/Globals';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import LoadingDot from '../../../components/Gadgets/Loading';
import Fetcher from '../../../API/fakeApi';

let mainForm = [];
function FicheForm(route) {
  let {set, values} = route.route.params;
  const [componentloading, setcomponentloading] = React.useState(false);
  const [submiting, setsubmiting] = React.useState('progress');
  const [dependencies, setdependencies] = React.useState({});
  let refs = [],
    mySwipper;

  React.useEffect(() => {
    inflateForm();
    return () => {
      mainForm = [];
    };
  }, [dependencies]);
  //const [currentText, setcurrentText] = useState(0);
  //let text = Globals.ARRAYS.text_arr[currentText].split("/--/");
  function inflateForm() {
    let form = set.content;
    if (form) {
      for (let fi = 0; fi < form.length; fi++) {
        for (let j = 0; j < form[fi].length; j++) {
          let element = form[fi][j];
          let deps = element.dependencie;
          form[fi][j] = {
            ...element,
            onchange: element.dependent
              ? value => {
                  setdependencies({...dependencies, [element.key]: value[0]});
                }
              : () => {},
            ...(deps
              ? {
                  values: flatArrayBykey(
                    element.values,
                    deps[1],
                    dependencies[deps[0]],
                  ),
                }
              : {}),
          };
        }
      }
      mainForm = form;
      setcomponentloading(!componentloading);
    }
  }
  function getFormResponses(responses) {
    let allrep = {},
      go = true;
    console.log(refs);

    for (let fi = 0; fi < refs.length; fi++) {
      const actualForm = refs[fi],
        firstElementkey = actualForm.props.form[0].key;

      const responsesi = refs[fi]._getFormResponses();
      var result = {};

      let value = [
        {key: 'impl1', label: 1},
        {key: 'imp2', label: 2},
        {key: 'imp3', label: 3},
        {key: 'imp4', label: 4},
      ].reduce(function () {});

      [0, 1, 2, 3, 4].reduce(function (
        accumulateur,
        valeurCourante,
        index,
        array,
      ) {
        return accumulateur + valeurCourante;
      },
      10);

      if (responsesi === false) {
        go = false;
        Toast.show({
          type: 'error',
          text1: Globals.STRINGS.empty_field,
        });
        break;
      }
      Object.assign(allrep, responsesi);
    }
    if (0) {
      setsubmiting('submiting');
      Fetcher.PostFiche(JSON.stringify(allrep))
        .then(res => {
          if (res.error) {
            Toast.show({
              type: 'error',
              text1: res.error,
            });
            setsubmiting('progress');
          } else {
            Toast.show({
              type: 'success',
              text1: 'Bienvenu',
              text2: res.success,
            });
            setsubmiting('submited');
            /*todo
          Storer.storeData('@ProfilInfo', {...res, username, password}).then(
            () => {
              Storer.storeData('@USER_TYPE', 1).then(() => {
                RNReastart.Restart();
              });
            },
          );*/
          }
        })
        .catch(err => {
          toast_message(err, 50000);
        });
    }
  }
  return (
    <View style={{flex: 1}}>
      <Toast />
      <Swiper
        style={{backgroundColor: 'white', height: 'auto'}}
        ref={ref => {
          mySwipper = ref;
        }}
        autoplay={false}
        loop={false}
        showsButtons={true}
        activeDotColor={Globals.COLORS.primary}
        scrollEnabled={false}
        buttonWrapperStyle={styles.buttonWrapperStyle}
        paginationStyle={styles.paginationStyle}
        nextButton={
          <TouchableOpacity
            style={{
              ...styles.buts_style,
              ...styles.buts_style_next,
            }}
            activeOpacity={0.8}
            onPress={e => {
              mySwipper.scrollBy(1);
            }}>
            <Text style={styles.boldText_touchable}>Suivant</Text>
          </TouchableOpacity>
        }
        prevButton={
          <TouchableOpacity
            style={{
              ...styles.buts_style,
              ...styles.buts_style_prev,
            }}
            activeOpacity={0.8}
            onPress={e => {
              mySwipper.scrollBy(-1);
            }}>
            <Icon name="caret-back" size={20} color="white" />
          </TouchableOpacity>
        }>
        {mainForm.length > 0 ? (
          mainForm.map((mes, i) => (
            <DynamicForm
              ref={ref => {
                refs[i] = ref;
              }}
              key={i}
              style={styles.slide}
              form={mes}
              submitButton={
                i === mainForm.length - 1 && submiting !== 'submited'
                  ? {
                      action: responses => {
                        getFormResponses(responses);
                      },
                      label: 'Soumettre',
                      disabled: submiting === 'submiting',
                      buttonStyle: {
                        backgroundColor: Globals.COLORS.primary,
                        height: 40,
                        marginTop: 20,
                        borderRadius: 50,
                      },
                      buttonTextStyle: {
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                        color: 'white',
                      },
                    }
                  : null
              }
            />
          ))
        ) : (
          <LoadingDot />
        )}
      </Swiper>
    </View>
  );
}

export default FicheForm;
