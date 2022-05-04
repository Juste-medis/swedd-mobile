import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DynamicForm from '../../../components/Formifyer/forms/DynamicForm/DynamicForm';
import {
  dynamicCompute,
  flatArrayBykey,
  toast_message,
} from '../../../Helpers/Utils';
import {styleFicheForm as styles} from '../../../Ressources/Styles';
import Globals from '../../../Ressources/Globals';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import LoadingDot from '../../../components/Gadgets/Loading';
import Fetcher from '../../../API/fetcher';
import {fakepost} from '../../../Ressources/Data/properties';
import Storer from '../../../API/storer';
import RNReastart from 'react-native-restart';
import Accordian from '../../../components/Gadgets/Description_View';

let mainForm = [];
function FicheForm(route) {
  let {set, values, fichestate} = route.route.params,
    observations = [];

  const [componentloading, setcomponentloading] = React.useState(false);
  const [submiting, setsubmiting] = React.useState('progress');
  const [dependencies, setdependencies] = React.useState({});
  let refs = [],
    mySwipper;

  React.useEffect(() => {
    if (fichestate) {
      let {observationRseN2, observationRseN1, observationAdmin} = values;
      if (
        (observationRseN2?.length > 0 && observationRseN2[0] !== '') ||
        (observationRseN1?.length > 0 && observationRseN1[0] !== '') ||
        (observationAdmin?.length > 0 && observationAdmin[0] !== '')
      ) {
        observations = [
          ...observationRseN2,
          ...observationRseN1,
          ...observationAdmin,
        ];
      }
    }
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
        let defaultvls = {};
        for (let j = 0; j < form[fi].length; j++) {
          let element = form[fi][j];
          if (values) {
            let tmpdef = values[form[fi][j].key];
            if (j === 0 && tmpdef) {
              defaultvls = tmpdef;
              if (form[fi][j].key === 'beneficiaire') {
                Object.assign(defaultvls, {
                  arrondissement: `${defaultvls?.quartier?.arrondissement?.id}`,
                  commune: `${defaultvls?.quartier?.arrondissement?.commune?.id}`,
                  departement: `${defaultvls?.quartier?.arrondissement?.commune?.departement?.id}`,
                  quartier: `${defaultvls?.quartier?.libelle}`,
                  nbreFilleFreqClub: `${defaultvls?.nbreFilleFreqClub}`,
                });
              }
            }
          }
          let {dependencie} = element;
          form[fi][j] = {
            ...element,
            ...(defaultvls[element.key] !== undefined
              ? {
                  value: defaultvls[element.key],
                }
              : {}),
            ...(element.computation
              ? {
                  onchange: value => {
                    const oldval = dependencies[element.computation[0]];
                    setdependencies({
                      ...dependencies,
                      [element.computation[0]]: dynamicCompute(
                        element.computation[1],
                        oldval,
                        value,
                      ),
                    });
                  },
                }
              : {}),
            ...(element.computated
              ? {
                  value: dependencies[element.computated[0]] || 0,
                }
              : {}),
            ...(element.dependent
              ? {
                  onchange: value => {
                    const compval =
                      element.type === 'select' ? value[0] : value;
                    setdependencies({
                      ...dependencies,
                      [element.key]: compval,
                    });
                  },
                }
              : {}),

            ...(dependencie
              ? {
                  values: flatArrayBykey(
                    element.values,
                    dependencie[1],
                    dependencies[dependencie[0]],
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
  async function getFormResponses(responses) {
    setsubmiting('submiting');
    let allrep = {
        ...fakepost,
        ...(!fichestate
          ? {
              dateAjout: new Date().toISOString(),
              dateCollecte: new Date().toISOString(),
              categorieFiche: `/api/categorie_fiches/${set.id}`,
              facilitateur: `/api/facilitateurs/${Globals.PROFIL_INFO.id}`,
              fichestate: 'review',
            }
          : {
              id: values.id,
              dateAjout: values.dateAjout,
              dateCollecte: values.dateCollecte,
              categorieFiche: `/api/categorie_fiches/${set.id}`,
              facilitateur: `/api/facilitateurs/${Globals.PROFIL_INFO.id}`,
              fichestate: values.fichestate,
            }),
        dateModif: new Date().toISOString(),
      },
      go = true;
    console.log(JSON.stringify(allrep));

    for (let fi = 0; fi < refs.length; fi++) {
      const actualForm = refs[fi],
        firstElementkey = actualForm.props.form[0].key,
        responsesi = actualForm._getFormResponses();

      if (responsesi === false) {
        go = false;
        setsubmiting('progress');
        Toast.show({
          type: 'error',
          text1: Globals.STRINGS.empty_field,
          visibilityTime: 10000,
        });
        break;
      }

      var property = {};
      for (let pi = 0; pi < actualForm.props.form.length; pi++) {
        const actpo = actualForm.props.form[pi];
        if (firstElementkey !== actpo.key) {
          if (actpo.type === 'select' && !actpo.multiple) {
            property[actpo.key] = responsesi[actpo.key]?.userAnswer[0];
          } else if (actpo.subtype === 'numeric') {
            property[actpo.key] = Number(responsesi[actpo.key]?.userAnswer);
          } else {
            property[actpo.key] = responsesi[actpo.key]?.userAnswer;
          }
        }
      }
      Object.assign(allrep, {
        [firstElementkey]: {...allrep[firstElementkey], ...property},
      });
    }
    if (go) {
      let {beneficiaire, facilitateur, collecteurtitle} = allrep;
      let {quartier, arrondissement} = beneficiaire;
      allrep.beneficiaire.facilitateur = facilitateur;
      if (collecteurtitle) {
        allrep.collecteur = collecteurtitle.collecteur;
      }
      if (quartier) {
        allrep.quartier = allrep.beneficiaire.quartier = {
          libelle: quartier,
          arrondissement: `/api/arrondissements/${arrondissement}`,
        };
      }
      if (allrep.beneficiaire.kitRecu) {
        console.log('kitaki===============');
        const kitTable = [];
        for (let ki = 0; ki < Globals.PROFIL_INFO.kitsList.length; ki++) {
          const kit = Globals.PROFIL_INFO.kitsList[ki];
          if (allrep.beneficiaire[`aRecuKit_${kit.id}`]) {
            kitTable.push({
              ...kit,
              nombreRecu: allrep.beneficiaire[`nbreKitRecu_${kit.id}`],
              aRecuKit: true,
            });
          }
        }
        console.log(kitTable);
        console.log('kitaki===============');
        //allrep.beneficiaire.kitRecu = allrep.facilitateur;
      }
      //console.log(allrep.beneficiaire.kitRecu);
      console.log(allrep);

      Fetcher.PostFiche(allrep, {libelle: set.title, id: set.id}, fichestate)
        .then(res => {
          console.log(res);
          if (res['@type'] === 'hydra:Error') {
            Toast.show({
              type: 'error',
              text1: res['hydra:description'],
              visibilityTime: 10000,
            });
            setsubmiting('progress');
          } else {
            Toast.show({
              type: 'success',
              text1: res.success_offline || 'La fiche a bien été soumise !',
              text2: res.success,
              visibilityTime: 10000,
            });
            setsubmiting(!fichestate ? 'submited' : 'progress');
          }
          if (Globals.INTERNET) {
            Fetcher.SyncUserData();
          }
        })
        .catch(err => {
          if (err?.message?.includes("Unrecognized token '<'")) {
            Storer.removeData();
            setsubmiting('progress');
            RNReastart.Restart();
            return false;
          } else {
            toast_message(`${err}`);
          }
        });
    }
  }
  return (
    <View style={{flex: 1}}>
      <Toast />
      {observations.length > 0 && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
            zIndex: 10000,
          }}>
          <Accordian content="cd" data={observations} />
        </View>
      )}

      <Swiper
        style={{
          backgroundColor: 'white',
          height: 'auto',
          marginTop: observations.length > 0 ? 40 : 0,
        }}
        ref={ref => {
          mySwipper = ref;
        }}
        autoplay={false}
        loop={false}
        showsButtons={true}
        activeDotColor={Globals.COLORS.primary}
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
                      label: !fichestate ? 'Soumettre' : 'Mettre à jour',
                      disabled: submiting === 'submiting',
                      buttonStyle: {
                        backgroundColor: Globals.COLORS.primary,
                        height: 50,
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
