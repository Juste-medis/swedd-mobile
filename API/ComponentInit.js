import React from 'react';
import {Text} from 'react-native';
import Globals from '../Ressources/Globals';
import {useFonts} from 'expo-font';
async function App() {
  const [loaded] = useFonts({
    Lato: Globals.FONTS.Montserrat_LightItalic,
  });
  if (!loaded) {
    return null;
  }
  return <Text />;
}
export default App;
