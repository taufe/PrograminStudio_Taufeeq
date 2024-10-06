import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import minimalPastal from './../../../assets/images/minimalPastal.png';
import circle1 from './../../../assets/images/circle1.png';
import circle2 from './../../../assets/images/circle2.png';
import circle3 from './../../../assets/images/circle3.png';
import robotShop from './../../../assets/images/robotShop.png';
import ironPat from './../../../assets/images/ironPat.png';
import ronRemain from './../../../assets/images/ronRemain.png';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily} from '../../../constants';
import {Spacer} from '../../../components/spacer';
import {totalSize} from 'react-native-dimension';

const {width, height} = Dimensions.get('window');

export const SeasonLeaderBoard = () => {
  return (
    <LinearGradient
      colors={colors.gradientleaderBoard}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      locations={[0, 0.4, 1]}
      style={styles.container}>
      <Spacer height={height * 0.078} />
      <View style={styles.containerOutLine}>
        <OutlinedTextComponent
          text="SEASON LEADERBOARD"
          fontSize={38}
          color="rgba(135, 32, 129,.9)"
          outlineColor={colors.appTextColor6}
          outlineWidth={0.2}
        />
      </View>
      <Spacer height={height * 0.28} />
      <View style={styles.contentContainer}>
        <Image source={minimalPastal} style={styles.minimalPastal} />
        <View style={styles.podiumContainer}>
          <View style={styles.podiumItem}>
            <Image source={circle1} style={styles.podiumCircle1} />
            <Image
              source={robotShop}
              style={[styles.character, styles.robotShop]}
            />
          </View>
          <View style={styles.podiumItem}>
            <Image
              source={circle2}
              style={[styles.podiumCircle2, styles.firstPlaceCircle]}
            />
            <Image
              source={ironPat}
              style={[styles.character, styles.ironPat]}
            />
          </View>

          <View style={styles.podiumItem}>
            <Image source={circle3} style={styles.podiumCircle3} />
            <Image
              source={ronRemain}
              style={[
                styles.character,
                styles.ronRemain,
                {
                  width: width * 0.45,
                  height: height * 0.45,
                  left: -width * 0.29,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.nameContainer1}>
          <Text style={styles.name}>rudy92sale</Text>
        </View>
        <View style={styles.nameContainer2}>
          <Text style={{...styles.name, fontSize: totalSize(2.15)}}>
            IronPatt
          </Text>
        </View>
        <View style={styles.nameContainer3}>
          <Text style={{...styles.name, fontSize: totalSize(1.75)}}>
            RonRemain
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const OutlinedTextComponent = ({
  text,
  fontSize,
  color,
  outlineColor,
  outlineWidth,
}) => {
  return (
    <View style={styles.textContainer}>
      {[-1, 1].map(xOffset =>
        [-1, 1].map(yOffset => (
          <Text
            key={`${xOffset}-${yOffset}`}
            style={[
              styles.outlinedText,
              {
                fontSize: fontSize,
                color: outlineColor,
                top: yOffset * outlineWidth,
                left: xOffset * outlineWidth,
              },
            ]}>
            {text}
          </Text>
        )),
      )}
      <Text style={[styles.mainText, {fontSize: fontSize, color: color}]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerOutLine: {
    alignItems: 'center',
    marginBottom: -44,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: -height * 0.055,
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: height * 0.15,
    width: '100%',
    zIndex: 1,
  },
  podiumItem: {
    alignItems: 'center',
  },
  podiumCircle1: {
    width: width * 0.33,
    height: width * 0.33,
    resizeMode: 'contain',
    position: 'absolute',
    top: -width * 0.15,
  },
  podiumCircle2: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
    position: 'absolute',
    top: -width * 0.39,
  },
  podiumCircle3: {
    width: width * 0.33,
    height: width * 0.33,
    resizeMode: 'contain',
    position: 'absolute',
    top: -width * 0.2,
  },
  firstPlaceCircle: {
    width: width * 0.5,
    height: width * 0.5,
  },
  character: {
    width: width * 0.24,
    height: width * 0.36,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  },
  robotShop: {
    top: width * -0.15,
  },
  ironPat: {
    bottom: width * -0.05,
  },
  ronRemain: {
    bottom: width * -0.39,
  },
  nameContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: height * 0.03,
    zIndex: 2,
    left: -width * 0.3,
  },
  nameContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: height * 0.082,
    zIndex: 2,
  },
  nameContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: height * 0.06,
    zIndex: 2,
    left: width * 0.3,
  },
  name: {
    color: colors.appTextColor6,
    fontSize: totalSize(1.5),
    fontFamily: fontFamily.appTextBold,
  },
  nameFirst: {
    marginBottom: 15,
  },
  minimalPastal: {
    width: width,
    height: height * 0.18,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'relative',
  },
  outlinedText: {
    position: 'absolute',
    fontFamily: fontFamily.appTextBlack,
    textAlign: 'center',
    lineHeight: 39,
  },
  mainText: {
    fontFamily: fontFamily.appTextBlack,
    textAlign: 'center',
    lineHeight: 39,
  },
});
