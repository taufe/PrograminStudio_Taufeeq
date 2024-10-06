import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, fontFamily} from '../../../constants';
import {height, totalSize, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import mainImage from './../../../assets/images/mainImage.png';
import fallRestartSeasonImg from './../../../assets/images/fallRestartSeasonImg.png';

export const SeasonMainSection = ({onPressContact}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={mainImage} />
      <View style={styles.overlayContainer}>
        <Image style={styles.fallingImage} source={fallRestartSeasonImg} />
        <TouchableOpacity onPress={onPressContact} style={styles.buttonWrapper}>
          <LinearGradient
            colors={colors.gradiant}
            style={styles.gradientButton}
            locations={[0, 0.5, 0.9, 1]}
            start={{x: 0, y: 0.9}}
            end={{x: 1, y: 1.9}}>
            <Text style={styles.buttonText}>Gioca ora</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width(100),
    height: height(43),
    borderBottomLeftRadius: totalSize(2.5),
    borderBottomRightRadius: totalSize(2.5),
    overflow: 'hidden',
    alignSelf:'center'
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode:'cover'
  },
  overlayContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },

  fallingImage: {
    width: width(50),
    height: height(20),
    alignSelf: 'center',
    marginTop: -25,
  },
  buttonWrapper: {
    alignSelf: 'center',
    marginTop: height(17),
  },
  gradientButton: {
    paddingVertical: height(1.5),
    paddingHorizontal: width(10),
    borderRadius: totalSize(0.8),
  },
  buttonText: {
    fontFamily: fontFamily.appTextBold,
    color: colors.appTextColor6,
    fontSize: totalSize(2),
  },
});
