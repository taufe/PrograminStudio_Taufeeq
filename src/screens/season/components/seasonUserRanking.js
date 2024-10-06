import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import {width, totalSize, height} from 'react-native-dimension';
import {colors, fontFamily} from '../../../constants';
import buttonAvatar from './../../../assets/images/buttonAvatar.png';
import { TouchableOpacity } from 'react-native';

export const UserRankingComponent = ({
  position,
  name,
  points,
  userIcon,
  index,
  dataLength,
}) => {
  return (
    <>
      <View
        style={[
          styles.itemContainer,
          index === dataLength - 1 && {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        ]}>
        <View style={{width: width(10)}}>
          <Text style={styles.positionText}>{position}</Text>
        </View>
        <View style={{width: width(20)}}>
          <Image source={userIcon} style={styles.userIconStyle} />
        </View>
        <View style={{width: width(45)}}>
          <Text style={styles.userName}>{name}</Text>
        </View>
        <Text style={styles.pointsText}>{points}</Text>
      </View>
      {index !== dataLength - 1 && <View style={styles.line}></View>}
    </>
  );
};

export const FragamerButton = ({onPressFraGame}) => {
  return (
    <TouchableOpacity onPress={onPressFraGame} style={styles.buttonWrapper}>
      <View style={{width: width(10)}}>
        <Text style={styles.positionText}>24</Text>
      </View>
      <View style={{width: width(15)}}>
        <Image source={buttonAvatar} style={styles.userIconStyle} />
      </View>
      <View style={{width: width(50)}}>
        <Text
          style={{
            ...styles.userName,
            fontSize: totalSize(1.7),
            fontFamily: fontFamily.appTextBold,
          }}>
          FraGamer93
        </Text>
      </View>
      <Text style={styles.pointsText}>1</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height(0.9),
    paddingHorizontal: width(4),
    backgroundColor: colors.appBgColor3,
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height(0.9),
    marginHorizontal: width(4),
    backgroundColor: colors.appBgColor22,
    paddingHorizontal: width(4),
    borderRadius:totalSize(.8)
  },
  positionText: {
    color: colors.appTextColor6,
    fontSize: totalSize(1.5),
    fontFamily: fontFamily.appTextBold,
  },
  userName: {
    color: colors.appTextColor6,
    fontSize: totalSize(1.7),
    fontFamily: fontFamily.appTextRegular,
  },
  pointsText: {
    fontSize: totalSize(2.1),
    color: colors.appTextColor6,
    fontFamily: fontFamily.appTextBold,
  },
  userIconStyle: {
    height: 40,
    width: 40,
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.appBorderColor4,
  },
});
