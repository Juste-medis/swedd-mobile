import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profil from "./Stack/ProfileNavigation";
import About from "./Stack/AboutNavigation";
import Notification from "./Stack/NotificationNavigation";
import Parameter from "./Stack/ParameterNavigation";
import ControlBoard from "./Stack/ControlBoardNavigation";
import Globals from "../Ressources/Globals";
import Icon from "react-native-vector-icons/FontAwesome";
import Icono from "react-native-vector-icons/Octicons";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();
function ParentMainNavigation() {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        initialRouteName="Profil"
        drawerContentOptions={{
          activeTintColor: "#30B9AB",
          activeBackgroundColor: "rgba(0,0,0,.04)",
          labelStyle: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "PatrickHand-Regular",
          },
        }}
      >
        <Drawer.Screen
          name="Profil"
          component={Profil}
          options={{
            title: Globals.STRINGS.Profil,
            drawerIcon: () => <Icon name="user" size={20} color="black" />,
          }}
        />
        <Drawer.Screen
          name="ControlBoard"
          component={ControlBoard}
          options={{
            title: Globals.STRINGS.BoardControl,
            drawerIcon: () => (
              <Icono name="dashboard" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Notification"
          component={Notification}
          options={{
            title: Globals.STRINGS.Notification,
            drawerIcon: () => <Icon name="bell-o" size={20} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Parameter"
          component={Parameter}
          options={{
            title: Globals.STRINGS.Parameter,
            drawerIcon: () => <Icon name="cog" size={20} color="black" />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            title: Globals.STRINGS.About,
            drawerIcon: () => <Icon name="info" size={20} color="black" />,
          }}
        />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
}

export default ParentMainNavigation;
