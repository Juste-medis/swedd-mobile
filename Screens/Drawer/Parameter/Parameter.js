import React from 'react';
import {View} from 'react-native';
import DynamicForm from '../../../components/Formifyer/settings/DynamicForm/DynamicForm';
import {styleFicheForm as styles} from '../../../Ressources/Styles';

function Parameter(route) {
  React.useEffect(() => {
    return () => {};
  }, []);
  let settingsForm = [
    {
      key: 'notificationheader',
      type: 'header',
      subtype: 'h3',
      label: 'Notifications',
      style: styles.sectionTitleStyle,
    },
    {
      key: 'notificationFicheRejetee',
      label: 'Fiches rejetées',
      placeholder:
        "M'avertir losque le superviseur hiérachique rejette une fiche envoyée",
      type: 'checkbox-group',
      other: false,
      toggle: true,
      values: [
        {
          label: '',
          value: 'oui',
        },
      ],
    },
    {
      key: 'notificationFicheValidee',
      label: 'Fiche Validées',
      placeholder:
        "M'avertir losque le superviseur hiérachique valide de mes fiche envoyées",
      type: 'checkbox-group',
      other: false,
      toggle: true,
      values: [
        {
          label: '',
          value: 'oui',
        },
      ],
    },
    {
      key: 'Synchonisationheader',
      type: 'header',
      subtype: 'h3',
      label: 'Synchonisation',
      style: styles.sectionTitleStyle,
    },
    {
      key: 'commune',
      type: 'select',
      label: 'Période',
      multiple: false,
      values: [
        {
          label: 'Journalier',
          value: 'jour',
          selected: true,
        },
        {
          label: 'Hebdomadaire',
          value: 'hebdo',
        },
        {
          label: 'Mensuel',
          value: 'mensuel',
        },
      ],
    },
    {
      key: 'activatesynchro',
      label: 'Activité',
      placeholder:
        "Activer la synchronisation pour envoyer les fiches sauvégardées lors d'une unterruption de Connexion internet",
      type: 'checkbox-group',
      other: false,
      toggle: true,
      values: [
        {
          label: '',
          value: 'oui',
        },
      ],
    },
  ];
  //const [currentText, setcurrentText] = useState(0);
  //let text = Globals.ARRAYS.text_arr[currentText].split("/--/");
  return (
    <View style={{flex: 1}}>
      <DynamicForm style={styles.slide} form={settingsForm} />
    </View>
  );
}

export default Parameter;
