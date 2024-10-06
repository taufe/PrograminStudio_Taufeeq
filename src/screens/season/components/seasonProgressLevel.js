import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {width, totalSize, height} from 'react-native-dimension';
import dollarSignIcon from './../../../assets/icons/dollarSign.png';
import {colors, fontFamily} from '../../../constants';

export const SeasonProgressComponent = ({
  progressImage,
  priceTitle,
  progressLevel,
  target,
  imageWith,
  imageHight,
  imageStyle,
}) => {
  const progress = progressLevel / target;

  return (
    <View style={styles.progressContainer}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Image
          source={progressImage}
          style={[
            styles.image,
            {width: imageWith, height: imageHight},
            imageStyle,
          ]}
        />
        {priceTitle !== '' && (
          <View style={styles.iconWithText}>
            <Image style={styles.dollarSign} source={dollarSignIcon} />
            <Text style={styles.priceTitle}>{priceTitle}</Text>
          </View>
        )}
      </View>
      <Progress.Bar
        progress={progress}
        width={50}
        height={8}
        color={colors.appTextColor7}
        unfilledColor={colors.appTextColor8}
        borderWidth={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: width(2),
  },
  priceTitle: {
    fontSize: totalSize(1.5),
    fontFamily: fontFamily.appTextBold,
    color: colors.appTextColor9,
  },

  dollarSign: {
    width: totalSize(1.85),
    height: totalSize(1.85),
  },
  iconWithText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
  },
});
