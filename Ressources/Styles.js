import {StyleSheet, Dimensions} from 'react-native';
import Globals from '../Ressources/Globals';
//fontFamily?: string | undefined | 'Helvetica' | 'Montserrat' | 'Neogrotesk' | 'Ubuntu' ;

const {width, height} = Dimensions.get('screen');
const mobile_360_750 = true;
const mobile_500_1000 = width <= 500 && height <= 1000;

let tyleFicheForm,
  tyleStartSplash,
  tyleSignIn,
  tyleDisplayCategorie,
  tyleMyCoursesScreen,
  tyleCourseOverView,
  tyleControlBoard,
  tyleAccount,
  tyleNotificationItem,
  tyleAnimatorsItem,
  tyleAccordian,
  tyletoollength,
  tyleNoInternet;

if (mobile_360_750) {
  tyleFicheForm = StyleSheet.create({
    main_container: {
      backgroundColor: 'white',
    },
    slide: {
      paddingBottom: 50,
    },
    bottom_container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      width: '100%',
    },
    buts_style: {
      width: 100,
      backgroundColor: Globals.COLORS.primary,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
    },
    boldText_touchable: {
      fontFamily: 'Lato-Bold',
      color: Globals.COLORS.white,
      fontSize: 14,
    },
    title_text: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Lato-Regular',
      fontSize: 20,
    },
    subtitle_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
    },
    buttonWrapperStyle: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      position: 'absolute',
      top: 290,
      left: 0,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    paginationStyle: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      position: 'absolute',
      top: 570,
      left: 0,
      flex: 1,
      alignItems: 'center',
      overflow: 'scroll',
      zIndex: 1000,
      height: 50,
    },
    dot: {
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 30,
      elevation: 10,
      padding: 10,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
    buts_style_next: {right: 0},
    buts_style_prev: {left: 0, width: 30, height: 30, borderRadius: 30},
    sectionTitleStyle: {
      fontFamily: 'Lato-Bold',
      color: Globals.COLORS.primary,
      marginTop: 30,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  tyleStartSplash = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
    },
    Image_style: {
      height: 70,
      width: 70,
    },
    top_content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: 50,
      right: 20,
    },
    bottom_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
      position: 'absolute',
      bottom: 200,
      backgroundColor: 'rgba(0,0,0,.5)',
    },
    title_text: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Lato-Regular',
      fontSize: 20,
    },
    subtitle_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
    },
    botofim1: {
      height: 15,
      backgroundColor: '#bdbdbd',
      width: '70%',
      marginBottom: 5,
      borderRadius: 3,
    },
    botofim2: {
      height: 15,
      width: '50%',
      backgroundColor: '#bdbdbd',
      borderRadius: 3,
      marginBottom: 5,
    },
    botofim3: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
    botofim4: {},
    botofim3_text: {marginStart: 10, fontFamily: 'Lato-Regular', fontSize: 15},
    botofim4_text: {
      marginStart: 10,
      fontSize: 15,
      fontFamily: 'Lato-Bold',
      color: 'black',
    },
  });
  tyleSignIn = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: Globals.COLORS.white,
    },
    titleText: {
      fontSize: 15,
      marginBottom: 10,
      color: Globals.COLORS.blue_dark,
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Lato-Bold',
    },
    loginButtonLabel: {
      fontFamily: 'Lato-Bold',
      fontSize: 23,
    },
    navButtonText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    boldText_touchable: {
      fontFamily: 'Lato-Bold',
      color: Globals.COLORS.white,
      fontSize: 18,
    },
    boldText: {
      color: Globals.COLORS.secondary,
      fontSize: 16,
      marginVertical: 16,
      fontFamily: 'Lato-Bold',
    },
    simple_text: {
      textAlign: 'center',
      color: Globals.COLORS.arsenic2,
    },
    Image_style: {
      height: 150,
      width: 150,
      marginBottom: 30,
    },
    Image_flag: {
      height: 40,
      width: 50,
      position: 'absolute',
      top: 79,
      left: 230,
    },
    center_container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    input_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center_scroll: {
      width: '100%',
      paddingTop: 60,
    },
    bottom_container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      height: '10%',
    },
    text_input: {
      marginTop: 10,
      marginBottom: 10,
      width: width / 1.1,
      height: height / 13,
      elevation: 20,
    },
    buts_style: {
      width: 200,
      backgroundColor: Globals.COLORS.primary,
      marginTop: 15,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    },
    input: {
      width: '80%',
      height: 50,
      paddingStart: 20,
      borderRadius: 50,
      borderColor: 'black',
      borderWidth: 1,
      color: Globals.COLORS.black,
      backgroundColor: Globals.COLORS.white,
      marginTop: 2,
    },
    wrong_login_container: {
      bottom: 5,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderTopWidth: 2,
      borderTopColor: Globals.COLORS.red,
    },
    wrong_login_found_text: {
      color: Globals.COLORS.red,
      fontFamily: 'Lato-Bold',
      fontSize: 14,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    indicator: {},
    media_unity: {
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      backgroundColor: Globals.COLORS.white,
      height: 40,
      width: 70,
      marginHorizontal: 12,
    },
    media_container: {flexDirection: 'row', margin: 50},
  });

  tyleCourseOverView = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginBottom: 50,
    },
    top_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#404040',
      padding: 6,
      elevation: 10,
    },
    title_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 20,
      color: 'white',
      marginBottom: 8,
      textAlign: 'left',
    },
    description_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: 'white',
      paddingTop: 10,
      textAlign: 'left',
    },
    top_prop_container: {
      display: 'flex',
      flexDirection: 'row',
      padding: 6,
      borderWidth: 2,
      borderColor: Globals.COLORS.white,
      margin: 2,
      borderRadius: 21,
      alignItems: 'center',
    },
    top_prop_text_bold: {
      fontFamily: 'Lato-Bold',
      fontSize: 10,
      color: 'white',
      marginStart: 4,
    },
    top_prop_text_tiny: {
      fontWeight: 'normal',
      fontFamily: 'Lato-Regular',
      fontSize: 10,
      color: 'white',
    },
    bottom_container_top: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      flexDirection: 'row',
      paddingVertical: 20,
    },
    media_container: {
      backgroundColor: 'grey',
      borderRadius: 8,
      width: '100%',
      height: 180,
    },
    image: {
      borderRadius: 8,
    },
    bottom_container: {
      display: 'flex',
      flexDirection: 'column',
    },
    to_com_cont: {
      padding: 10,
      backgroundColor: Globals.COLORS.arsenic2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    price_text: {
      color: 'black',
      fontFamily: 'Lato-Regular',
      fontSize: 25,
    },
    to_come: {
      color: 'white',
      fontSize: 25,
      fontFamily: 'Lato-Bold',
    },
    checkout_button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Globals.COLORS.secondary,
      borderRadius: 5,
      elevation: 10,
      height: 45,
    },
    chectout_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: Globals.COLORS.white,
    },
    addind_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 10,
      color: Globals.COLORS.white,
      elevation: 10,
    },
    add_to_button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      height: 45,
      width: '100%',
    },
    add_to_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 17,
      color: Globals.COLORS.primary,
    },
    unity_view: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: 5,
      padding: 5,
    },
    unity_view_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 13,
      marginHorizontal: 10,
      color: Globals.COLORS.arsenic,
    },
    includes_container: {
      flexDirection: 'column',
      width: '100%',
      marginTop: 10,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#ffffff',
      elevation: 3,
    },
    preRec_container: {
      flexDirection: 'column',
      width: '100%',
      marginVertical: 10,
      borderRadius: 6,
      backgroundColor: '#ffffff',
      elevation: 3,
      padding: 10,
    },
    seemore_text: {
      color: Globals.COLORS.primary_pure,
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      margin: 10,
    },
    star_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    indi_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
      borderRadius: 6,
    },
    indi_cont: {
      width: '100%',
      backgroundColor: '#bdbdbd',
      marginStart: 10,
      height: 10,
    },
    star_container_left: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    star_average: {
      fontFamily: 'Lato-Regular',
      fontSize: 50,
      color: 'black',
    },
    stars_cont: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    notes: {fontFamily: 'Lato-Regular', fontSize: 17},
    star_container_right: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginStart: 20,
      marginEnd: '30%',
    },
    head_title: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: Globals.COLORS.black,

      marginVertical: 8,
    },
    comments_container: {
      flexDirection: 'column',
      marginBottom: 10,
    },
    comment_author: {
      color: Globals.COLORS.arsenic,
      fontFamily: 'Lato-Bold',
      fontSize: 17,
    },
    comment_date: {
      fontFamily: 'Lato-Regular',
      fontSize: 12,
    },
    comment_content: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: Globals.COLORS.arsenic2,
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },

    author_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 17,
      color: 'black',
    },
    author_value_prop: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: Globals.COLORS.secondary,
      flexWrap: 'wrap',
    },
    author_prop: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      color: '#3c434d',
    },
    author_cont_top: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 10,
    },
  });
  tyleMyCoursesScreen = StyleSheet.create({
    main_scroll: {
      flex: 1,
      backgroundColor: Globals.COLORS.white,
      padding: 7,
    },
    main_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 70,
      flex: 1,
      backgroundColor: 'white',
    },
    image_container: {
      display: 'flex',
    },
    image_empty: {
      marginTop: 30,
      width: 150,
      height: 240,
    },
    head_title: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      color: Globals.COLORS.black,
      marginTop: 30,
      textAlign: 'center',
    },
    empty_container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: Globals.COLORS.white,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    CategorieList: {
      width: '100%',
      justifyContent: 'flex-start',
    },
    list: {
      marginBottom: 50,
      backgroundColor: Globals.COLORS.white,
    },

    likes_text: {
      fontFamily: 'Lato-Bold',
      color: Globals.COLORS.arsenic2,
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      margin: 0,
      marginBottom: 20,
    },
    head_title_container: {
      padding: 10,
      marginVertical: 5,
    },
  });
  tyleDisplayCategorie = StyleSheet.create({
    main_container: {
      backgroundColor: Globals.COLORS.white,
    },
    touchable_main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 75,
    },
    touchable_main_vert: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      width: '100%',
    },
    image: {
      height: 60,
      width: 60,
      margin: 4,
      elevation: 10,
      borderRadius: 30,
    },
    imag: {
      height: 60,
      width: 60,
      borderRadius: 30,
    },
    title_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 11,
      color: '#535e72ff',
      textAlign: 'center',
    },
    title_text_vert: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      color: '#535e72ff',
      textAlign: 'center',
      margin: 8,
    },
  });
  tyleNoInternet = StyleSheet.create({
    main_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 4,
    },
    err_cont: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.white,
      height: '100%',
    },
    retry_text: {
      borderColor: Globals.COLORS.primary,
      borderWidth: 1,
      color: Globals.COLORS.primary,
      padding: 8,
      fontFamily: 'Lato-Bold',
      margin: 8,
    },
  });
  tyleNotificationItem = StyleSheet.create({
    main_ripple: {
      flexDirection: 'row',
      elevation: 2,
      width: '90%',
      padding: 10,
      marginBottom: 10,
    },

    main_container: {
      display: 'flex',
      flexDirection: 'column',
      paddingEnd: 70,
    },
    title_container: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingTop: 10,
    },
    notification_title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: Globals.COLORS.arsenic2,
    },
    notif_infotag: {
      fontFamily: 'Lato-Bold',
      marginTop: 2,
      color: Globals.COLORS.arsenic2,
      fontWeight: '700',
    },
    def_avatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      height: 50,
      width: 50,
      marginRight: 15,
    },
    notification_description: {
      fontSize: 17,
      fontFamily: 'Lato-Recular',
      color: Globals.COLORS.arsenic,
      fontWeight: '600',
      lineHeight: 25,
    },
    desciption_container: {
      justifyContent: 'flex-start',
    },
    notif_meta_container: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
    },
  });
  tyleAnimatorsItem = StyleSheet.create({
    main_ripple: {
      flexDirection: 'row',
      elevation: 2,
      width: '100%',
      padding: 10,
      marginVertical: 1,
      borderStartColor: Globals.COLORS.primary,
      borderStartWidth: 4,
    },

    main_container: {
      display: 'flex',
      flexDirection: 'column',
      paddingEnd: 70,
    },
    title_container: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    notification_title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: Globals.COLORS.arsenic2,
    },
    notif_infotag: {
      fontFamily: 'Lato-Bold',
      marginTop: 2,
      color: Globals.COLORS.arsenic2,
      fontWeight: '700',
    },
    def_avatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
      height: 40,
      width: 40,
      backgroundColor: Globals.COLORS.primary,
      marginRight: 20,
    },
    notification_description: {
      fontSize: 17,
      fontFamily: 'Lato-Bold',
      color: Globals.COLORS.arsenic,
      fontWeight: '600',
      lineHeight: 25,
    },
    desciption_container: {
      justifyContent: 'flex-start',
    },
    notif_meta_container: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
    },
  });
  tyletoollength = StyleSheet.create({
    learnig_display_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 20,
    },
  });
  tyleControlBoard = StyleSheet.create({
    main_container: {height: '100%', backgroundColor: Globals.COLORS.surface},
    icon_containter_ficheli: {
      padding: 10,
      borderRadius: 10,
    },
    icon_containter: {
      backgroundColor: 'white',
      padding: 25,
      elevation: 2,
      borderRadius: 10,
    },
    main_menu_indider: {
      marginTop: 20,
      width: '100%',
      borderRadius: 20,
      backgroundColor: 'white',
      elevation: 20,
    },
    menu_item: {
      width: '100%',
      flexDirection: 'column',
      borderRadius: 15,
      paddingHorizontal: 20,
    },
    main_menu_top: {
      display: 'flex',
      flexDirection: 'row',
    },
    prop_unity_value: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      marginTop: 10,
      paddingStart: 10,
    },
    main_menu_bottom: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    prop_unity_valuei: {
      fontSize: 15,
      marginTop: 10,
      color: Globals.COLORS.blue_dark,
      paddingStart: 0,
    },
    description: {
      paddingVertical: 10,
      color: '#707375',
      fontFamily: 'Lato-Regular',
      lineHeight: 21,
    },
  });
  tyleAccount = StyleSheet.create({
    main_container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      paddingBottom: 50,
      backgroundColor: Globals.COLORS.surface,
    },
    image_avatar: {
      borderRadius: 70,
      height: 130,
      width: 130,
    },
    name_title: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: 'black',
      margin: 8,
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
    menu_title: {
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      color: Globals.COLORS.grey,
      margin: 8,
    },
    menu_item: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 20,
    },
    item_title: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: Globals.COLORS.arsenic,
    },
    item_value: {
      fontFamily: 'Lato-Regular',
      fontSize: 13,
      color: Globals.COLORS.blue_grey,
    },
    buts_style: {
      width: 200,
      backgroundColor: Globals.COLORS.pink,
      marginVertical: 15,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      height: 50,
      alignSelf: 'center',
    },
    boldText_touchable: {
      fontFamily: 'Lato-Bold',
      color: Globals.COLORS.white,
      fontSize: 18,
    },
    flat_list_item: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      backgroundColor: Globals.COLORS.white,
      borderRadius: 2,
      elevation: 4,
      margin: 4,
      paddingStart: 7,
    },
    item_heberger: {
      width: '100%',
    },
    prop_unity: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '85%',
    },
    text_main: {
      color: Globals.COLORS.arsenic,
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      margin: 8,
    },
    text_object: {
      color: Globals.COLORS.black,
      fontSize: 16,
      padding: 8,
      fontFamily: 'Lato-Bold',
    },
    prop_unity_value: {
      textAlign: 'left',
      paddingStart: 10,
      fontFamily: 'Lato-Bold',
      fontSize: 50,
      paddingTop: 0,
      marginTop: -10,
    },
    note_main_container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '95%',
    },
    note_title: {
      color: Globals.COLORS.arsenic,
      marginStart: 5,
      fontFamily: 'Lato-Bold',
    },
    note_content: {
      color: Globals.COLORS.arsenic,
      marginStart: 5,
    },
    note_date: {
      color: Globals.COLORS.arsenic,
      marginStart: 5,
      width: '100%',
      textAlign: 'right',
      fontFamily: 'Lato-Regular',
      fontSize: 10,
    },
  });
  tyleAccordian = StyleSheet.create({
    title: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      maxWidth: '40%',
      color: Globals.COLORS.arsenic,
    },
    des_title: {
      color: '#878787',
      marginHorizontal: 2,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 2,
      borderTopColor: Globals.COLORS.white,
    },
    main_container: {
      backgroundColor: Globals.COLORS.white,
    },
    main_touchable: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 4,
    },

    touchable_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '85%',
      marginEnd: 10,
    },
    index_text: {
      color: 'black',
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      margin: 20,
    },
    right_toucha: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    pos_comp: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title_lesson: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      color: Globals.COLORS.blue_dark,
      fontWeight: '600',
    },
    sub_title: {
      fontFamily: 'Lato-Regular',
      fontSize: 13,
      marginTop: 2,
      color: Globals.COLORS.arsenic2,
    },
    top_cont: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    },
    lesson_heberger: {
      overflow: 'hidden',
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: Globals.COLORS.light_grey,
    },
  });
} else if (mobile_500_1000) {
  tyleFicheForm = StyleSheet.create({
    wrapper: {},
  });
}
export const styleFicheForm = tyleFicheForm,
  styleStartSplash = tyleStartSplash,
  styleSignIn = tyleSignIn,
  styleDisplayCategorie = tyleDisplayCategorie,
  styleNoInternet = tyleNoInternet,
  styleMyCoursesScreen = tyleMyCoursesScreen,
  styleCourseOverView = tyleCourseOverView,
  styleAccount = tyleAccount,
  styleNotificationItem = tyleNotificationItem,
  styleAnimatorsItem = tyleAnimatorsItem,
  styleAccordian = tyleAccordian,
  styletoollength = tyletoollength,
  styleControlBoard = tyleControlBoard;
