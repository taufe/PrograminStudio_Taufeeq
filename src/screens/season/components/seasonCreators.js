import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../constants';
import {width, height, totalSize} from 'react-native-dimension';
import { Spacer } from '../../../components/spacer';

export const SeasonCreatorComponent = ({creatorImages, creatorName, status, bulletStatus}) => {
  const statusBackgroundColor =
    status === 'Live' ? colors.appBgColor14 : colors.appBgColor15;
  const statusTextColor = status === 'Live' ? 'white' : 'gray';

  return (
    <>
    <View style={styles.itemContainer}>
      <Image source={creatorImages} style={styles.creatorImages} />
      <View
        style={[styles.statusBadge, {backgroundColor: statusBackgroundColor}]}>
        <View style={styles.bulletTextWrapper}>
        <Text style={[styles.bullet, { color: statusTextColor }]}>{'\u2B24'}</Text>
        <Text style={[styles.statusText, {color: statusTextColor}]}>
            {status}
          </Text>
        </View>
      </View>
        <Spacer isTiny />
        <Text style={styles.creatorName}>{creatorName}</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  
  itemContainer: {
    borderRadius: 10,
    marginHorizontal:width(2.2),
  },
  creatorImages: {
    width: 103,
    height: 144,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf:'center'
  },
  statusBadge: {
    position: 'absolute',
    top: 5,
    left:5,
    paddingVertical: height(0.4),
    paddingHorizontal: width(2),
    borderRadius: totalSize(.8),
  },
  statusText: {
    color: colors.appTextColor6,
    fontFamily:fontFamily.appTextSemiBold,
    fontSize:totalSize(1.3)
  },
  bulletTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  bullet: {
    paddingRight: width(1.2),
    fontSize: totalSize(1.2),
  },
  creatorName:{
    fontFamily:fontFamily.appTextBold,
    fontSize:totalSize(1.8),
    color:colors.appTextColor6
  }
});
