import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import vansImage from './../../../assets/images/vansImage.png';
import {width, totalSize, height} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily} from '../../../constants';
import {Spacer} from '../../../components/spacer';

export const SeasonVansComponent = () => {
  return (
    <LinearGradient
      colors={colors.gradientVans}
      start={{x: 0.4, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.card}>
      <Text style={styles.tagline}>EXCLUSIVE DROPS</Text>
      <Spacer isTiny />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Vans season</Text>
          <Spacer height={8} />
          <View style={styles.line}></View>
          <Spacer height={8} />
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
          <Spacer height={8} />
          <TouchableOpacity style={styles.shopButtonWrapper}>
            <Text style={styles.shopButtonText}>Vai allo shop</Text>
          </TouchableOpacity>
        </View>
        <Image source={vansImage} style={styles.image} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: totalSize(2),
    width: width(90),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tagline: {
    color: colors.appTextColor6,
    fontSize: totalSize(1.4),
    textTransform: 'uppercase',
    backgroundColor: colors.appBgColor11,
    width: width(37),
    textAlign: 'center',
    borderRadius: totalSize(0.4),
    paddingVertical: height(0.6),
    fontFamily: fontFamily.appTextSemiBold,
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.appTextColor6,
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(3),
  },
  subtitle: {
    color: colors.appTextColor13,
    fontFamily: fontFamily.appTextRegular,
    fontSize: totalSize(1.5),
  },
  shopButtonWrapper: {
    backgroundColor: colors.appBgColor5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: width(34),
  },
  shopButtonText: {
    color: colors.appTextColor6,
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(1.45),
    textAlign: 'center',
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    position:'absolute',
    right: -32,
    bottom:-15
  },
  line: {
    width: width(7),
    height: height(0.6),
    backgroundColor: colors.appBgColor5,
    borderRadius: totalSize(0.8),
  },
});
