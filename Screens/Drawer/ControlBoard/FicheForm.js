import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DynamicForm from '../../../components/Formifyer/DynamicForm/DynamicForm';
import {flatArrayBykey, toast_message} from '../../../Helpers/Utils';
import {styleFicheForm as styles} from '../../../Ressources/Styles';
import {
  arrondissements,
  communes,
  departements,
} from '../../../Ressources/Data/properties';
import Globals from '../../../Ressources/Globals';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';

let mainForm = [];
function FicheForm(route) {
  let {set, values} = route.route.params;
  const [componentloading, setcomponentloading] = React.useState(false);
  const [departement, setdepartement] = React.useState(0);
  const [dependencies, setdependencies] = React.useState({});
  const [commune, setcommune] = React.useState(0);
  let refs = [],
    mySwipper;

  React.useEffect(() => {
    inflateForm();
    return () => {
      mainForm = [];
    };
  }, [departement, commune]);
  //const [currentText, setcurrentText] = useState(0);
  //let text = Globals.ARRAYS.text_arr[currentText].split("/--/");
  function inflateForm() {
    let form = set.content;
    for (let fi = 0; fi < form.length; fi++) {
      form[fi] = {
        ...form[fi],
        onchange: form[fi].dependent
          ? value => {
              setdependencies({...dependencies, [form[fi].key]: value[0]});
            }
          : () => {},
        ...(form[fi].dependencie
          ? {
              values: flatArrayBykey(
                communes,
                'DEPARTEMENTS',
                dependencies[form[fi].dependencie],
              ),
            }
          : {}),
      };
    }
    mainForm = [
      [
        {
          key: 'title',
          type: 'header',
          subtype: 'h3',
          label: set.title,
          style: styles.sectionTitleStyle,
        },
        {
          key: 'departement',
          type: 'select',
          label: 'DEPARTEMENTS',
          multiple: false,
          searchInputPlaceholder: 'Veuillez sélectionner le département',
          values: departements,
          onchange: value => {
            setdepartement(value[0]);
          },
        },
        {
          key: 'commune',
          type: 'select',
          label: 'COMMUNES',
          multiple: false,
          searchInputPlaceholder: 'Veuillez sélectionner la commune',
          onchange: value => {
            setcommune(value[0]);
          },
          values: flatArrayBykey(communes, 'DEPARTEMENTS', departement),
        },
        {
          key: 'arrondissement',
          type: 'select',
          label: 'ARRONDISSEMENTS',
          multiple: false,
          searchInputPlaceholder: "Veuillez sélectionner l'arrondissement",
          values: flatArrayBykey(arrondissements, 'COMMUNES', commune),
        },
        {
          key: 'village',
          type: 'text',
          required: true,
          label: 'Village',
          placeholder: 'Veuillez écrire le village de provenance de la fille',
          subtype: 'text',
          maxlength: 30,
        },
      ],
      [
        {
          key: 'animatorsectiontitle',
          type: 'header',
          subtype: 'h3',
          label: "Informations relatives à l'agent enregistreur",
          style: styles.sectionTitleStyle,
        },
        {
          key: 'animator_lastname',
          type: 'text',
          required: true,
          label: "Nom de l'agent enrégistreur",
          placeholder: 'veillez entrer votre nom',
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'animator_firstname',
          label: "Prénoms de l'agent enrégistreur",
          placeholder: 'Veillez entrer vos Prénoms',
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'animator_Contact',
          label: 'Contact',
          placeholder: 'Veuillez écrire votre numéro',

          type: 'text',
          required: true,
          subtype: 'tel',
          maxlength: 30,
        },
        {
          key: 'animator_Nom_du_superviseur',
          label: 'Nom du superviseur',
          placeholder: 'Veuillez écrire le nom e votre superviseur',
          type: 'textarea',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'animator_Pr_noms_du_superviseur',
          label: 'Prénoms du superviseur',
          placeholder: 'Veuillez écrire le/les prénoms de votre superviseur',
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
      ],
      [
        {
          key: 'beneficiairesectiontitle',
          type: 'header',
          subtype: 'h3',
          label: "Informations relatives à l'enfant/adolescent (e) enregistré",
          style: styles.sectionTitleStyle,
        },
        {
          key: 'beneficiaire_Num_ro_d_ordre',
          label: "Numéro d'ordre",
          placeholder:
            "Veuillez écrire le numéro d'ordre de l'enfant enregistré",
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'beneficiaire_Nom_de_l_enfant_enregistr',
          label: "Nom de l'enfant enregistré",
          placeholder: "Veuillez écrire le nom de l'enfant enregistré",
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'beneficiaire_Pr_noms_de_l_enfant_enregistr',
          label: "Prénoms de l'enfant enregistré",
          placeholder: "Veuillez écrire le/les prénoms de l'enfant enregistré",
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'beneficiaire_Sexe',
          label: 'Sexe',
          placeholder: "Veuillez cochez le sexe de l'enfant enregistré",
          type: 'radio-group',
          other: false,
          required: true,
          values: [
            {
              label: 'Féminin',
              value: 'f_minin',
              selected: true,
            },
            {
              label: 'Masculin',
              value: 'masculin',
            },
          ],
        },
        {
          key: 'beneficiaire_Age_de_l_enfant_enr_gistr',
          label: "Age de l'enfant enrégistré",
          placeholder: "Veuillez entrer l'âge exacte de l'enfant enregistré",
          type: 'text',
          required: true,
          subtype: 'tel',
          maxlength: 30,
        },
        {
          key: 'beneficiaire_Statut_de_l_enfant',
          label: "Statut de l'enfant",
          placeholder: "Veuillez cocher le statut de l'enfant a enregistré",
          type: 'radio-group',
          other: false,
          required: true,
          values: [
            {
              label: 'Déscolarisé',
              value: 'd_scolaris',
            },
            {
              label: 'Non scolarisé',
              value: 'non_scolaris',
            },
            {
              label: 'Scolarisé',
              value: 'scolaris',
            },
          ],
        },
        {
          key: 'beneficiaire_crochage_classe',
          label: "Préciser le niveau d'étude avant décrochage (classe)",
          placeholder:
            "Veuillez écrire le niveau d'étude/classe atteint par l'enfant avant décrochage",
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'beneficiaire_residence',
          label: 'Quartier de ville/ Village de résidence',
          placeholder:
            "Veuillez entrer le village/village de résidence de l'enfant a enregistré",
          type: 'text',
          required: true,
          subtype: 'text',
          maxlength: 30,
        },
        {
          key: 'beneficiaire_vulnerabilit',
          required: true,
          label: 'Critères de vulnérabilité',
          placeholder:
            'Veuillez choisir le critère de vulnérabilité de la fille',
          type: 'checkbox-group',
          other: true, // optional
          values: [
            {
              label: 'OEV',
              value: 'oev',
            },
            {
              label: 'PLACEE',
              value: 'placee',
            },
            {
              label: 'SURVIVANTE VBG',
              value: 'survivante_vbg',
            },
            {
              label: 'FILLE - MERE',
              value: 'fille___mere',
            },
            {
              label: 'HANDICAPEE',
              value: 'handicapee',
            },
          ],
        },
        {
          key: 'beneficiaire_Logement',
          label: 'Logement',
          type: 'radio-group',
          other: false,
          required: true,
          placeholder:
            "Veuillez cochez la situation familiale de l'enfant enregistré",
          values: [
            {
              label: 'Avec un parent ou les deux',
              value: 'avec_un_parent_ou_les_deux',
            },
            {
              label: 'Sans parent (ni père, ni mère)',
              value: 'sans_parent_ni_p_re_ni_m_re',
            },
          ],
        },
        {
          key: 'beneficiaire_Non_mari',
          label: 'Non marié',
          type: 'radio-group',
          other: false,
          required: true,
          placeholder:
            "Veuillez cocher la catégorie dans laquelle se situe l'adolescent enregistré",
          values: [
            {
              label: 'Avec enfants',
              value: 'avec_enfants',
            },
            {
              label: 'Sans enfants',
              value: 'sans_enfants',
            },
          ],
        },
        {
          key: 'beneficiaire_Mari',
          type: 'radio-group',
          other: false,
          required: true,
          label: 'Marié',
          placeholder:
            "Veuillez cochez la catégorie dans laquelle se situe l'adolescent enregistré",
          values: [
            {
              label: 'Avec enfants',
              value: 'avec_enfants',
            },
            {
              label: 'Sans enfants',
              value: 'sans_enfants',
            },
          ],
        },
      ],
    ];
    setcomponentloading(!componentloading);
  }
  function getFormResponses(responses) {
    let allrep = {};
    for (let fi = 0; fi < refs.length; fi++) {
      const responsesi = refs[fi]._getFormResponses();
      if (responsesi === false) {
        Toast.show({
          type: 'error',
          text1: Globals.STRINGS.empty_field,
        });
        break;
      }
      Object.assign(allrep, responsesi);
    }
    toast_message(JSON.stringify(allrep), 50000);
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
                i === mainForm.length - 1
                  ? {
                      action: responses => {
                        getFormResponses(responses);
                      },
                      label: 'Soummettre',
                      buttonStyle: {
                        backgroundColor: Globals.COLORS.primary,
                        height: 40,
                        marginTop: 20,
                        borderRadius: 50,
                      },
                      buttonTextStyle: {
                        fontSize: 18,
                        color: 'white',
                      },
                      disabled: false,
                    }
                  : null
              }
            />
          ))
        ) : (
          <View style={styles.centeredView}>
            <LottieView
              source={require('../../../assets/loties/spinner.json')}
              autoPlay
              loop
              style={{width: 150, height: 150, marginVertical: 20}}
            />
          </View>
        )}
      </Swiper>
    </View>
  );
}

export default FicheForm;
