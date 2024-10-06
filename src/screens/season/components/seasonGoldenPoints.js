import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import lockedImage from './../../../assets/images/questionForziere.png';
import gpImg from './../../../assets/images/gpImg.png';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily} from '../../../constants';
import {totalSize, width, height} from 'react-native-dimension';

export const SeasonGoldenPointsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <LinearGradient
            colors={colors.gradientLock}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            locations={[0, 0.5, 1]}
            style={styles.gradientContainerLock}>
            <View style={styles.itemContainer}>
              <Image source={lockedImage} style={styles.lockImage} />
            </View>
          </LinearGradient>
          <Text style={styles.labelText}>LOCKED</Text>
        </View>
        <View>
          <LinearGradient
            colors={colors.gradientGpImg}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            locations={[0, 0.5, 1]}
            style={styles.gradientContainerGp}>
            <View style={styles.itemContainer}>
              <View style={styles.overlayContainerGp}>
                <Image source={gpImg} style={styles.gpImg} />
                <LinearGradient
                  colors={colors.gradientPlusBg}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.priceWrapper}>
                  <Text style={styles.priceText}>+30</Text>
                </LinearGradient>
              </View>
            </View>
          </LinearGradient>
          <Text style={{...styles.labelText, marginTop:height(1.5)}}>{'GOLDEN \n POINTS'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width(75),
    alignSelf: 'center',
  },
  itemContainer: {
    alignItems: 'center',
  },

  overlayContainerGp: {
    width: 92,
    height: 92,
    position: 'relative',
  },
  lockImage: {
    width: 89,
    height: 102,
    resizeMode: 'contain',
    position: 'absolute',
  },
  gpImg: {
    width: 86,
    height: 86,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
  },
  labelText: {
    color: colors.appTextColor10,
    marginTop: height(3),
    fontFamily:fontFamily.appTextBold,
    fontSize:totalSize(1.5),
    textAlign:'center'
  },

  priceWrapper: {
    position: 'absolute',
    top: -15,
    left: width(12),
    borderRadius: 10,
    paddingHorizontal: width(3),
    paddingVertical: height(0.5),
    zIndex: 1,
  },
  priceText: {
    color: colors.appTextColor6,
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(2.6),
  },
  gradientContainerLock: {
    borderRadius: totalSize(2),
    width: 92,
    height: 92,
  },
  gradientContainerGp: {
    borderRadius: totalSize(2),
  },
});
