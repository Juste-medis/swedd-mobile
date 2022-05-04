import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Profil from './Stack/ProfileNavigation';
import About from './Stack/AboutNavigation';
import Helps from './Stack/HelpsNavigation';
import Notification from './Stack/NotificationNavigation';
import Parameter from './Stack/ParameterNavigation';
import ControlBoard from './Stack/ControlBoardNavigation';
import Globals from '../Ressources/Globals';
import Icono from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {alert_message, toast_message} from '../Helpers/Utils';
import fetcher from '../API/fetcher';
import Storer from '../API/storer';
import RNReastart from 'react-native-restart';
import NotificationSplasher from '../components/Gadgets/NotificationSplasher';

const Drawer = createDrawerNavigator();
function ParentMainNavigation() {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        initialRouteName="Profil"
        screenOptions={({navigation}) => {
          return {
            headerRight: () => <NotificationSplasher navigation={navigation} />,
            drawerActiveTintColor: '#30B9AB',
            drawerActiveBackgroundColor: 'rgba(0,0,0,.04)',
            drawerLabelStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 18,
            },
          };
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Profil"
          component={Profil}
          options={{
            first: 1,
            title: Globals.STRINGS.Profil,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="person-circle" size={30} color={color} />
              ) : (
                <Icono name="person-circle-outline" size={30} color={color} />
              ),
          }}
        />
        <Drawer.Screen
          name="MainControlBoard"
          component={ControlBoard}
          options={({navigation, route}) => {
            return {
              title: Globals.STRINGS.BoardControl,
              drawerIcon: ({color, focused}) =>
                focused ? (
                  <Icono name="ios-pie-chart" size={30} color={color} />
                ) : (
                  <Icono name="ios-pie-chart-outline" size={30} color={color} />
                ),
            };
          }}
        />
        <Drawer.Screen
          name="MainParameter"
          component={Parameter}
          options={{
            title: Globals.STRINGS.Parameter,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="settings" size={30} color={color} />
              ) : (
                <Icono name="settings-outline" size={30} color={color} />
              ),
          }}
        />
        {Globals.PROFIL_INFO.user_type === 'facilitateur_1' ? (
          <Drawer.Group>
            <Drawer.Screen
              name="MainNotification"
              component={Notification}
              options={{
                groupName: 'Alertes',
                title: Globals.STRINGS.Notification,
                drawerIcon: ({color, focused}) =>
                  focused ? (
                    <Icono name="notifications" size={30} color={color} />
                  ) : (
                    <Icono
                      name="notifications-outline"
                      size={30}
                      color={color}
                    />
                  ),
              }}
            />
          </Drawer.Group>
        ) : null}
        <Drawer.Screen
          name="MainFeedBack"
          component={Helps}
          options={{
            drawerItemStyle: {
              borderColor: Globals.COLORS.grey,
              borderBottomWidth: 1,
            },
            title: 'Aides et Feedback',
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="ios-chatbubbles" size={30} color={color} />
              ) : (
                <Icono name="ios-chatbubbles-outline" size={30} color={color} />
              ),
          }}
        />
        <Drawer.Screen
          name="MainAbout"
          component={About}
          options={{
            drawerItemStyle: {
              borderColor: Globals.COLORS.grey,
              borderBottomWidth: 1,
            },
            title: Globals.STRINGS.About,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="md-information-circle" size={30} color={color} />
              ) : (
                <Icono
                  name="md-information-circle-outline"
                  size={30}
                  color={color}
                />
              ),
          }}
        />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
}

const CustomSidebarMenu = props => {
  const {state, descriptors, navigation} = props;
  let lastGroupName = '';
  let newGroup = true;
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawer_header_cont}>
          {Globals.PROFIL_INFO.urlPhoto &&
          Globals.PROFIL_INFO.urlPhoto !== '' ? (
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              style={styles.image_avatar}
              PlaceholderContent={
                <Icono
                  name="person-circle"
                  size={50}
                  color={Globals.COLORS.blue_dark}
                />
              }
            />
          ) : (
            <View style={styles.def_avatar}>
              <Icono name="person" size={70} color="white" />
            </View>
          )}

          <Text style={styles.name_title}>
            {Globals.PROFIL_INFO.nom +
              ' ' +
              Globals.PROFIL_INFO.prenom.toUpperCase().charAt(0) +
              '.'}
          </Text>
          <Text style={styles.mail_title}>{Globals.PROFIL_INFO.contact}</Text>
          <Text style={styles.mail_title}>
            ONG: {Globals.PROFIL_INFO?.Ong?.libelle}
          </Text>
        </View>
        {state.routes.map((route, i) => {
          const {activeTintColor, drawerIcon, title, first, groupName} =
            descriptors[route.key].options;
          if (lastGroupName !== groupName) {
            newGroup = true;
            lastGroupName = groupName;
          } else {
            newGroup = false;
          }
          return (
            <React.Fragment key={i}>
              {newGroup ? (
                <View key={i} style={styles.sectionContainer}>
                  {!first && (
                    <Text
                      key={groupName}
                      style={{marginLeft: 16, fontWeight: 'bold'}}>
                      {groupName}
                    </Text>
                  )}
                  <View style={styles.sectionLine} />
                </View>
              ) : null}
              <DrawerItem
                key={route.key}
                label={({color, focused}) => (
                  <Text style={{color, fontWeight: focused ? '800' : '600'}}>
                    {title}
                  </Text>
                )}
                focused={
                  state.routes.findIndex(e => e.name === route.name) ===
                  state.index
                }
                icon={drawerIcon}
                activeTintColor={activeTintColor}
                onPress={() => navigation.navigate(route.name)}
              />
            </React.Fragment>
          );
        })}
        <TouchableOpacity
          style={styles.buts_style}
          activeOpacity={0.8}
          onPress={() => {
            alert_message(
              'déconnexion',
              Globals.STRINGS.sur_deconnect,
              'Se déconnecter',
              () => {
                fetcher
                  .Signout()
                  .then(resi => {
                    if (resi.data === 1) {
                      Storer.removeData();
                      RNReastart.Restart();
                    } else {
                      alert_message(Globals.STRINGS.Ocurred_error);
                    }
                  })
                  .catch(err => {
                    if (!Globals.INTERNET) {
                      toast_message(Globals.STRINGS.no_internet);
                    } else {
                      toast_message(`${err}`);
                    }
                  });
              },
            );
          }}>
          <Text style={styles.boldText_touchable}>
            <Icono name="arrow-back-outline" size={20} color="red" />
            Se déconnecter{' '}
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawer_header_cont: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buts_style: {
    width: 200,
    borderWidth: 1,
    borderColor: Globals.COLORS.pink,
    marginVertical: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
  },
  boldText_touchable: {
    fontFamily: 'Lato-Bold',
    color: Globals.COLORS.pink,
    fontSize: 18,
    textAlignVertical: 'center',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_avatar: {
    borderRadius: 70,
    height: 100,
    width: 100,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  sectionLine: {
    backgroundColor: '#dddddd',
    flex: 1,
    height: 1,
    marginLeft: 10,
    marginRight: 20,
  },
  name_title: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: 'black',
  },
  def_avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 100,
    width: 100,
    backgroundColor: Globals.COLORS.primary,
  },
  mail_title: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
});

export default ParentMainNavigation;
