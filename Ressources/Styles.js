import {StyleSheet, Dimensions} from 'react-native';
import Globals from '../Ressources/Globals';
//fontFamily?: string | undefined | 'Helvetica' | 'Montserrat' | 'Neogrotesk' | 'Ubuntu' ;

const {width, height} = Dimensions.get('screen');
const mobile_360_750 = true;
const mobile_500_1000 = width <= 500 && height <= 1000;

let tyleWelcome,
  tyleStartSplash,
  tyleSignIn,
  tyleWelcomeCard,
  tyleCourses,
  tyleSearch,
  tyleDisplayCategorie,
  tyleCoursesList1,
  tyleCoursesList2,
  tyleCategory,
  tyleCourseItem,
  tyleMyPannier,
  tyleMyCoursesScreen,
  tyleCourseOverView,
  tyleFormator,
  tyleSectionComplete,
  tyleCommentComplete,
  tyleDownload,
  tyleReader,
  tyleControlBoard,
  tyleAccount,
  tyleNotificationItem,
  tyleAccordian,
  tyletoollength,
  tyleNoInternet;

if (mobile_360_750) {
  tyleWelcome = StyleSheet.create({
    main_container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    slide: {
      flex: 1,
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
      width: 200,
      backgroundColor: Globals.COLORS.primary,
      marginTop: 30,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
    },
    boldText_touchable: {
      fontWeight: 'bold',
      color: Globals.COLORS.white,
      fontSize: 18,
    },
    title_text: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontFamily: 'Neogrotesk',
    },
    subtitle_text: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat',
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
      fontSize: 20,
      fontFamily: 'Neogrotesk',
    },
    subtitle_text: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat',
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
    botofim3_text: {marginStart: 10, fontSize: 15},
    botofim4_text: {
      marginStart: 10,
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
    },
  });

  tyleControlBoard = StyleSheet.create({
    pressable_cash: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
    },
    pressable_title: {
      fontSize: 15,
      fontFamily: 'Neogrotesk',
    },
    pressable_subtitle: {
      fontWeight: 'normal',
      fontSize: 15,
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
      fontWeight: 'bold',
    },
    loginButtonLabel: {
      fontWeight: 'bold',
      fontSize: 23,
    },
    navButtonText: {
      fontSize: 16,
    },
    boldText_touchable: {
      fontWeight: 'bold',
      color: Globals.COLORS.white,
      fontSize: 18,
    },
    boldText: {
      color: Globals.COLORS.secondary,
      fontSize: 16,
      marginVertical: 16,
      fontWeight: 'bold',
    },
    simple_text: {
      textAlign: 'center',
      color: Globals.COLORS.arsenic2,
    },
    Image_style: {
      height: 150,
      width: 150,
      zIndex: -41,
      marginBottom: 30,
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
      fontWeight: 'bold',
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

  tyleWelcomeCard = StyleSheet.create({
    touchable_main: {
      height: 200,
      margin: 9,
      display: 'flex',
      elevation: 10,
      backgroundColor: 'rgb(255,255,255)',
      borderRadius: 10,
    },
    Image: {
      borderRadius: 10,
      backgroundColor: 'rgba(0,0,0,.0)',
    },
    bottom_container: {
      position: 'absolute',
      padding: 8,
      bottom: 0,
    },
    title_text: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
      marginHorizontal: 2,
      fontFamily: 'Montserrat',
    },
    text_content: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'normal',
    },
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
      fontSize: 20,
      color: 'white',
      marginBottom: 8,
      textAlign: 'left',
      fontFamily: 'Ubuntu',
    },
    description_text: {
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
      fontWeight: 'bold',
      fontSize: 10,
      color: 'white',
      marginStart: 4,
    },
    top_prop_text_tiny: {
      fontWeight: 'normal',
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
      fontSize: 25,
      fontFamily: 'Neogrotesk',
    },
    to_come: {color: 'white', fontSize: 25, fontWeight: 'bold'},
    checkout_button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Globals.COLORS.secondary,
      borderRadius: 5,
      elevation: 10,
      height: 45,
      fontFamily: 'Neogrotesk',
    },
    chectout_text: {
      fontFamily: 'Neogrotesk',
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
      fontSize: 17,
      color: Globals.COLORS.primary,
      fontFamily: 'Neogrotesk',
    },
    unity_view: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: 5,
      padding: 5,
    },
    unity_view_text: {
      fontSize: 13,
      marginHorizontal: 10,
      color: Globals.COLORS.arsenic,
      fontFamily: 'Helvetica',
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
      width: `100%`,
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
      fontSize: 50,
      color: 'black',
    },
    stars_cont: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    notes: {fontSize: 17, fontFamily: 'Neogrotesk'},
    star_container_right: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginStart: 20,
      marginEnd: '30%',
    },
    head_title: {
      fontSize: 18,
      color: Globals.COLORS.black,
      fontFamily: 'Ubuntu',
      marginVertical: 8,
    },
    comments_container: {
      flexDirection: 'column',
      marginBottom: 10,
    },
    comment_author: {
      color: Globals.COLORS.arsenic,
      fontWeight: 'bold',
      fontSize: 17,
      fontFamily: 'Neogrotesk',
    },
    comment_date: {
      fontSize: 12,
    },
    comment_content: {
      fontSize: 16,
      color: Globals.COLORS.arsenic2,
      fontFamily: 'Helvetica',
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
      fontSize: 17,
      color: 'black',
      fontFamily: 'Neogrotesk',
    },
    author_value_prop: {
      fontSize: 14,
      color: Globals.COLORS.secondary,
      flexWrap: 'wrap',
      fontFamily: 'Neogrotesk',
    },
    author_prop: {
      fontSize: 15,
      color: '#3c434d',
      fontFamily: 'Helvetica',
    },
    author_cont_top: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 10,
    },
  });
  tyleMyPannier = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: Globals.COLORS.white,
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
      fontSize: 15,
      color: Globals.COLORS.brown,
      marginTop: 30,
      textAlign: 'center',
    },
    empty_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: Globals.COLORS.white,
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
      fontWeight: 'bold',
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
  tyleCourses = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: Globals.COLORS.white,
      padding: 4,
      paddingBottom: 48,
    },
    cate_text: {
      fontSize: 20,
      color: Globals.COLORS.blue_dark,
      fontFamily: 'Neogrotesk',
    },
    retry_text: {
      backgroundColor: Globals.COLORS.primary,
      borderRadius: 7,
      color: 'white',
      padding: 8,
      fontWeight: 'bold',
      margin: 8,
    },
    err_cont: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.white,
    },
    pan_style: {
      margin: 16,
      right: 0,
      top: 0,
      width: 100,
    },
  });
  tyleSearch = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: Globals.COLORS.white,
      paddingBottom: 48,
      paddingTop: 8,
    },
    scroll_main: {
      marginTop: 4,
      padding: 10,
    },
    searchBar: {
      elevation: 4,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      borderRadius: 4,
    },
    search_container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingStart: 10,
    },
    input_container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    retry_text: {
      backgroundColor: Globals.COLORS.primary,
      borderRadius: 7,
      color: 'white',
      padding: 8,
      fontWeight: 'bold',
      margin: 8,
    },
    head_title: {
      fontSize: 20,
      color: Globals.COLORS.primary_pure,
      fontWeight: 'bold',
    },
    err_cont: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.white,
    },
    item_heberger: {
      backgroundColor: Globals.COLORS.white,
      borderRadius: 10,
      elevation: 4,
      width: '98%',
    },
    item_container: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: Globals.COLORS.co_gris,
      padding: 5,
    },
    item_value: {
      fontSize: 13,
      fontWeight: 'normal',
      color: Globals.COLORS.blue_grey,
      fontFamily: 'Ubuntu',
      paddingStart: 4,
    },
  });
  tyleCategory = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: Globals.COLORS.white,
      paddingHorizontal: 8,
    },
    cate_text: {
      fontSize: 16,
      color: Globals.COLORS.blue_dark,
      fontFamily: 'Neogrotesk',
    },
    alafiche_text: {
      fontWeight: 'bold',
      fontSize: 20,
      color: Globals.COLORS.blue_dark,
    },
    retry_text: {
      backgroundColor: Globals.COLORS.primary,
      borderRadius: 7,
      color: 'white',
      padding: 8,
      fontWeight: 'bold',
      margin: 8,
      elevation: 4,
      fontSize: 20,
    },
    load_more_button: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    err_cont: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.white,
      height: '100%',
    },
    pan_style: {
      margin: 16,
      right: 0,
      top: 0,
      width: 100,
    },
    list: {
      marginBottom: 50,
    },
    loading_container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.white,
      height: '100%',
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
      fontSize: 11,
      color: '#535e72ff',
      textAlign: 'center',
      fontFamily: 'Neogrotesk',
    },
    title_text_vert: {
      fontSize: 15,
      color: '#535e72ff',
      textAlign: 'center',
      fontFamily: 'Neogrotesk',
      margin: 8,
    },
  });
  tyleCoursesList1 = StyleSheet.create({
    main_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginVertical: 10,
      backgroundColor: Globals.COLORS.white,
      elevation: 6,
    },
    cate_text: {
      fontSize: 20,
      color: Globals.COLORS.blue_dark,
    },
    main_scroller: {
      height: 220,
      marginBottom: 8,
    },
    touchable_main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: 172,
      margin: 4,
      backgroundColor: Globals.COLORS.white,
      borderRadius: 6,
      padding: 2,
    },
    see_more_main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
    },
    scroller_labelContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 2,
      backgroundColor: Globals.COLORS.white,
    },
    categorie_text: {
      fontSize: 20,
      color: Globals.COLORS.primary,
    },
    imag_container: {
      borderRadius: 5,
    },
    image: {
      borderRadius: 5,
    },
    bottom_container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: 7,
    },
    title_text: {
      fontSize: 14,
      color: Globals.COLORS.arsenic,
      textAlign: 'left',
      fontFamily: 'Neogrotesk',
    },
    formator_text: {
      fontSize: 13,
      color: Globals.COLORS.arsenic2,
      fontFamily: 'Helvetica',
    },
    stars_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 100,
    },
    note_text: {
      marginStart: 10,
      fontSize: 15,
    },
    price_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    good_price: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
    },
    to_come: {
      fontSize: 15,
      color: Globals.COLORS.white,
      backgroundColor: Globals.COLORS.arsenic2,
      fontWeight: 'bold',
      padding: 5,
    },
    bad_price: {
      fontSize: 10,
      textDecorationLine: 'line-through',
      marginStart: 10,
    },
    retry_text: {
      backgroundColor: Globals.COLORS.white,
      borderRadius: 7,
      color: 'white',
      padding: 8,
      fontWeight: 'bold',
      margin: 8,
    },
  });
  tyleFormator = StyleSheet.create({
    main_container: {
      display: 'flex',
      backgroundColor: Globals.COLORS.white,
      marginBottom: '15%',
    },
    top_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      margin: 10,
    },
    image: {
      borderRadius: 50,
      height: 100,
      width: '30%',
      padding: 4,
    },
    top_container_right: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '70%',
    },
    autor_name: {
      color: Globals.COLORS.arsenic,
      fontSize: 20,
    },
    autor_profession: {
      fontSize: 15,
    },
    middle_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    midle_prop_title: {
      fontWeight: 'bold',
    },
    midle_prop_value: {
      fontWeight: '700',
      color: Globals.COLORS.arsenic,
      fontSize: 18,
    },
    des_title: {
      fontWeight: '700',
      color: Globals.COLORS.arsenic,
      fontSize: 18,
    },
    des_content: {
      fontWeight: '700',
      color: Globals.COLORS.arsenic,
      fontSize: 24,
    },
    touchable_see_more: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 70,
    },
    seemore_text: {
      fontWeight: 'bold',
      color: Globals.COLORS.primary_pure,
      fontSize: 16,
    },
  });
  tyleSectionComplete = StyleSheet.create({
    main_container: {
      display: 'flex',
      backgroundColor: Globals.COLORS.white,
      padding: 8,
      paddingBottom: 80,
    },
    prog_cont: {
      borderRadius: 6,
      backgroundColor: '#ffffff',
      elevation: 3,
      padding: 10,
      margin: 10,
    },
    head_title: {
      fontSize: 20,
      color: Globals.COLORS.primary_pure,
      fontWeight: 'bold',
    },
  });
  tyleReader = StyleSheet.create({
    main_container: {
      height: '100%',
      width: '100%',
      backgroundColor: Globals.COLORS.white,
    },
    valide_container: {
      flex: 1,
      display: 'flex',
      paddingBottom: 0,
    },
    top_container: {},
    bottom_container: {
      flex: 2,
      padding: 8,
    },
    retry_text: {
      backgroundColor: Globals.COLORS.primary,
      borderRadius: 7,
      color: 'white',
      padding: 4,
      fontWeight: 'bold',
      margin: 8,
      textAlign: 'center',
    },
    err_cont: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    empty_notes: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontFamily: 'Neogrotesk',
      color: Globals.COLORS.arsenic2,
      margin: '10%',
    },
    title_text: {
      fontSize: 16,
      color: Globals.COLORS.blue_dark,
      fontFamily: 'Neogrotesk',
      paddingTop: 3,
    },
    seemoretext: {
      margin: 4,
      color: Globals.COLORS.white,
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tabbar: {
      backgroundColor: 'rgba(238, 108, 59,0.0)',
      height: 50,
      elevation: 0,
    },
    tabStyle: {
      backgroundColor: 'rgba(255, 255, 255,0)',
    },
    label: {
      fontSize: 10,
      color: Globals.COLORS.secondary,
      fontFamily: 'Neogrotesk',
      fontWeight: 'bold',
    },
    indicator: {
      backgroundColor: Globals.COLORS.primary,
      height: '5%',
      alignSelf: 'center',
    },
    labelStyle: {
      fontSize: 13,
      color: Globals.COLORS.arsenic2,
      fontFamily: 'Ubuntu',
    },

    video_potrait: {
      backgroundColor: 'rgba(0,0,0,.8)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    video_land: {
      backgroundColor: 'rgba(0,0,0,.8)',
      height: 210,
    },
  });
  tyleCommentComplete = StyleSheet.create({
    main_container: {
      flex: 1,
      display: 'flex',
      backgroundColor: Globals.COLORS.white,
      padding: 13,
      paddingBottom: 50,
    },
    star_cont: {
      borderRadius: 6,
      backgroundColor: '#ffffff',
      elevation: 3,
      padding: 10,
      margin: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    head_title: {
      fontSize: 20,
      color: Globals.COLORS.secondary,
      fontWeight: '800',
    },
    comments_container: {
      flexDirection: 'column',
      marginBottom: 10,
    },
    comment_author: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 17,
    },
    comment_date: {
      fontSize: 12,
    },
    comment_content: {
      fontSize: 16,
      color: 'black',
    },
    stars_cont: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    err_cont: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.white,
    },
  });

  tyleCourseItem = StyleSheet.create({
    touchable_main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    image: {
      height: '35%',
      width: '15%',
      marginHorizontal: '2%',
      marginTop: 4,
    },
    right_container: {
      display: 'flex',
      flexDirection: 'column',
      width: '70%',
    },
    title_text: {
      fontSize: 14,
      color: Globals.COLORS.arsenic2,
      fontFamily: 'Neogrotesk',
    },
    formator_text: {
      fontSize: 14,
      color: '#535e72ff',
      marginVertical: 1,
      fontFamily: 'Helvetica',
    },
    stars_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 100,
    },
    note_text: {
      marginStart: 10,
      fontSize: 15,
    },
    price_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    indi_cont: {
      width: `85%`,
      backgroundColor: '#bdbdbd',
      height: 5,
      borderRadius: 10,
    },
    good_price: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Neogrotesk',
    },
    bad_price: {
      fontSize: 10,
      textDecorationLine: 'line-through',
      marginStart: 10,
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 70,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });
  tyleCoursesList2 = StyleSheet.create({
    main_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 4,
    },
    cate_text: {
      fontSize: 20,
      color: Globals.COLORS.blue_dark,
    },
    main_scroller: {
      height: 220,
    },
    touchable_main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 180,
      margin: 4,
      backgroundColor: Globals.COLORS.white,
      borderRadius: 10,
    },
    scroller_labelContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 4,
      backgroundColor: Globals.COLORS.white,
    },
    categorie_text: {
      fontSize: 20,
      color: Globals.COLORS.primary,
    },
    imag_container: {
      borderRadius: 5,
    },
    image: {
      borderRadius: 5,
    },
    bottom_container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 15,
      color: '#535e72ff',
    },
    formator_text: {
      fontWeight: 'normal',
      fontSize: 13,
      color: '#535e72ff',
    },
    stars_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 100,
    },
    note_text: {
      marginStart: 10,
      fontSize: 15,
    },
    price_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    good_price: {
      fontSize: 15,
      color: 'black',
    },
    bad_price: {
      fontSize: 15,
      textDecorationLine: 'line-through',
      marginStart: 10,
    },
    retry_text: {
      backgroundColor: Globals.COLORS.teal,
      borderRadius: 7,
      color: 'white',
      padding: 8,
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      margin: 8,
    },
  });
  tyleDownload = StyleSheet.create({
    main_container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Globals.COLORS.primary,
    },
    retry_text: {
      backgroundColor: Globals.COLORS.primary_pure,
      borderRadius: 7,
      color: 'white',
      padding: 8,
      fontWeight: 'bold',
      margin: 8,
      fontSize: 25,
      textAlign: 'center',
    },
  });
  tyleNotificationItem = StyleSheet.create({
    main_ripple: {
      flexDirection: 'row',
      elevation: 2,
      width: '100%',
      padding: 10,
      marginVertical: 1,
    },
    image: {
      height: 60,
      width: 60,
      marginEnd: 4,
      backgroundColor: Globals.COLORS.grey,
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
      fontSize: 15,
      fontFamily: 'Neogrotesk',
      maxWidth: '85%',
    },
    notification_description: {
      fontSize: 16,
      fontFamily: 'Helvetica',
      color: Globals.COLORS.blue_grey,
    },
    desciption_container: {
      justifyContent: 'flex-start',
    },
  });
  tyletoollength = StyleSheet.create({
    learnig_display_text: {
      fontFamily: 'Ubuntu',
      fontSize: 20,
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
    },
    image_avatar: {
      borderRadius: 70,
      height: 100,
      width: 100,
    },
    name_title: {
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      fontSize: 15,
      color: Globals.COLORS.grey,
      margin: 8,
    },
    menu_item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: 'white',
    },
    item_title: {
      fontSize: 18,
      color: Globals.COLORS.arsenic,
    },
    item_value: {
      fontSize: 13,
      color: Globals.COLORS.blue_grey,
    },
    buts_style: {
      width: 200,
      backgroundColor: Globals.COLORS.primary,
      marginVertical: 15,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      height: 50,
      alignSelf: 'center',
    },
    boldText_touchable: {
      fontWeight: 'bold',
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
      fontSize: 14,
      margin: 8,
    },
    text_object: {
      color: Globals.COLORS.black,
      fontSize: 16,
      padding: 8,
      fontWeight: 'bold',
    },
    prop_unity_value: {
      borderRadius: 30,
      elevation: 2,
      backgroundColor: Globals.COLORS.primary,
      textAlign: 'center',
      color: 'white',
      padding: 3,
      fontWeight: 'bold',
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
      fontWeight: 'bold',
    },
    note_content: {
      color: Globals.COLORS.arsenic,
      marginStart: 5,
      fontFamily: 'Helvetica',
    },
    note_date: {
      color: Globals.COLORS.arsenic,
      marginStart: 5,
      width: '100%',
      textAlign: 'right',
      fontSize: 10,
    },
  });
  tyleAccordian = StyleSheet.create({
    title: {
      fontSize: 16,
      maxWidth: '40%',
      color: Globals.COLORS.arsenic,
      fontFamily: 'Neogrotesk',
    },
    des_title: {
      color: '#878787',
      marginHorizontal: 2,
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
      fontSize: 15,
      margin: 20,
      fontFamily: 'Ubuntu',
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
      fontSize: 15,
      color: Globals.COLORS.blue_dark,
      fontWeight: '600',
    },
    sub_title: {
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
  tyleWelcome = StyleSheet.create({
    wrapper: {},
  });
}
export const styleWelcome = tyleWelcome,
  styleStartSplash = tyleStartSplash,
  styleSignIn = tyleSignIn,
  styleWelcomeCard = tyleWelcomeCard,
  styleCourses = tyleCourses,
  styleDisplayCategorie = tyleDisplayCategorie,
  styleCoursesList1 = tyleCoursesList1,
  styleCoursesList2 = tyleCoursesList2,
  styleNoInternet = tyleNoInternet,
  styleCategory = tyleCategory,
  styleCourseItem = tyleCourseItem,
  styleMyPannier = tyleMyPannier,
  styleMyCoursesScreen = tyleMyCoursesScreen,
  styleCourseOverView = tyleCourseOverView,
  styleFormator = tyleFormator,
  styleCommentComplete = tyleCommentComplete,
  styleSearch = tyleSearch,
  styleSectionComplete = tyleSectionComplete,
  styleReader = tyleReader,
  styleDownload = tyleDownload,
  styleAccount = tyleAccount,
  styleNotificationItem = tyleNotificationItem,
  styleAccordian = tyleAccordian,
  styletoollength = tyletoollength,
  styleControlBoard = tyleControlBoard;
