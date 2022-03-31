import React from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {styleCoursesList1 as styles} from '../../../Ressources/Styles';
import TextW from '../../Tools/TextW';
import {showStars} from '../../../Helpers/Utils';
import Globals from '../../../Ressources/Globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressiveImage from '../../Tools/PlaceHolderLoader';
import numeral from 'numeral';
import TouchableRipple from '../../Elements/Touchable';
const CoursesList1 = route => {
  let orientation = route.verticale === true ? false : true;
  let {name, data} = route.inter_cat;
  const MainShow = data ? (
    data.map((mes, index) => {
      if (index != data.length - 1) {
        mes = {...mes, ...mes.meta[0]};
        delete mes.meta;
        let {
          c_title,
          formator,
          c_corverurl,
          c_stars,
          c_price,
          c_students,
          c_status,
        } = mes;

        return (
          <TouchableRipple
            style={[styles.touchable_main, {}]}
            onPress={() => {
              route.navigation.push('CourseOverview', {
                course: mes,
              });
            }}
            activeOpacity={0.9}
            key={`courseunity${index + 1}`}>
            <View
              style={[
                styles.imag_container,
                {
                  width: '100%',
                  height: '50%',
                },
              ]}>
              <ProgressiveImage
                style={[
                  styles.image,
                  {
                    height: '100%',
                    width: '100%',
                  },
                ]}
                uri={c_corverurl}
              />
            </View>
            <View style={styles.bottom_container}>
              <TextW
                style={styles.title_text}
                text={c_title}
                seemorecolor="blue"
                seemore=" .."
                size={30}
              />
              <TextW style={styles.formator_text} text={formator} size={15} />
              <View style={styles.stars_container}>
                {showStars(c_stars.average)}
                <TextW style={styles.note_text} text={c_students} size={50} />
              </View>
              {c_status === 'tocome' ? (
                <View style={styles.price_container}>
                  <Text style={styles.to_come}>à venir</Text>
                </View>
              ) : (
                <View style={styles.price_container}>
                  {c_price.current === 0 ? (
                    <View style={{backgroundColor: 'green'}}>
                      <Text
                        style={[styles.to_come, {backgroundColor: 'green'}]}>
                        Gratuit
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.price_container}>
                      <Text style={styles.good_price}>
                        {numeral(c_price.current).format('0,0[.]00 ') + ' CFA'}
                      </Text>
                      {c_price.promotion != null && (
                        <Text style={styles.bad_price}>
                          {numeral(c_price.promotion).format('0,0[.]00 ') +
                            ' CFA'}
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          </TouchableRipple>
        );
      } else {
        return (
          <Pressable
            onPress={() => {
              route.navigation.navigate('ExploreBest', {
                category: data[0].c_category,
                navigation: route.navigation,
              });
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgba(0, 0, 0,.1)' : 'white',
              },
              styles.see_more_main,
            ]}
            key={index + 1}>
            <TextW
              style={[
                styles.cate_text,
                {
                  color: Globals.COLORS.primary_pure,
                  fontFamily: 'Lato-Bold',
                  fontFamily: 'Lato-Regular',
                  fontSize: 15,
                },
              ]}
              size={50}
              text={Globals.STRINGS.seeMore}
            />
          </Pressable>
        );
      }
    })
  ) : (
    <View style={styles.err_cont}>
      <ActivityIndicator
        style={styles.indicator}
        size="small"
        color="#5b3a70"
      />
    </View>
  );

  return (
    <View style={styles.main_container}>
      {name != null && !route.a_lafiche ? (
        <View style={styles.scroller_labelContainer}>
          <TextW style={[styles.categorie_text]} size={50} text={name} />
          <Icon
            style={{marginStart: 5}}
            name="arrow-right"
            size={15}
            color={Globals.COLORS.primary}
          />
        </View>
      ) : (
        <View style={styles.scroller_labelContainer}>
          <TextW
            style={styles.cate_text}
            size={50}
            text={Globals.STRINGS.a_lafiche}
          />
        </View>
      )}
      <ScrollView
        style={styles.main_scroller}
        horizontal={orientation}
        showsHorizontalScrollIndicator={false}>
        {MainShow}
      </ScrollView>
    </View>
  );
};

export default CoursesList1;
