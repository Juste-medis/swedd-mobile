import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import DynamicForm from '../../../components/Formifyer/DynamicForm/DynamicForm';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';

function FicheForm(route) {
  let {set, values} = route.route.params;
  console.log(set, values);
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);

  return (
    <ScrollView
      style={{height: '100%', backgroundColor: Globals.COLORS.surface}}>
      <View style={{backgroundColor: null}}>
        <DynamicForm
          form={[
            {
              key: 'hdghhdbdfgh',
              type: 'header',
              subtype: 'h1',
              label: set.title,
            } /*
            {
              key: 'nabsgsgdhyshdhf',
              type: 'select',
              label: 'Languages Spoken',
              multiple: false,
              searchInputPlaceholder: 'Sélectionnez un département ..',
              values: [
                {
                  label: 'Yoruba',
                  value: 'yoruba',
                  selected: true,
                },
                {
                  label: 'Igbo',
                  value: 'igbo',
                },
                {
                  label: 'Hausa',
                  value: 'hausa',
                },
                {
                  label: 'English',
                  value: 'english',
                },
                {
                  label: 'Spanish',
                  value: 'spanish',
                },
                {
                  label: 'French',
                  value: 'french',
                },
              ],
            },*/,
          ]}
          submitButton={{
            action: responses => {
              console.log('Submit Button Responses: ', responses);
            },
            label: 'Soummettre',
            buttonStyle: {
              backgroundColor: '#CCCCCC',
              borderRadius: 3,
              height: 40,
            },
            buttonTextStyle: {
              fontSiz3: 18,
            },
            disabled: false,
          }}
        />
      </View>
    </ScrollView>
  );
}

export default FicheForm;
