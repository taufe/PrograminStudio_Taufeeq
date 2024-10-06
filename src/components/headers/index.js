import {Image, Text, View} from 'react-native';
import gameChangerIcon from './../../assets/icons/changeGame.png';
import notificationIcon from './../../assets/icons/notification.png';
import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../constants';
import {height, width, totalSize} from 'react-native-dimension';

export const SeasonHeader = () => {
  return (
    <View>
      <View style={styles.fifaContainer}>
        <View style={styles.fifaWrapper}>
          <Text style={styles.fifaText}>FIFA22 / PS4</Text>
          <Image style={styles.gameChangerIcon} source={gameChangerIcon} />
        </View>
      </View>
      <View style={styles.notificatinWrapper}>
        <Image style={styles.notificationIcon} source={notificationIcon} />
        <Text style={styles.notificationText}>Notifiche attive</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fifaContainer: {
    backgroundColor: colors.appBgColor3,
    paddingVertical: height(2),
  },
  fifaWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.appBgColor4,
    paddingHorizontal: width(7),
    paddingVertical: height(0.9),
    borderRadius: totalSize(0.8),
  },
  notificatinWrapper: {
    backgroundColor: colors.appBgColor5,
    paddingVertical: height(1.2),
    paddingHorizontal: width(7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fifaText: {
    fontFamily: fontFamily.appTextBold,
    color: colors.appTextColor2,
    paddingRight: width(2.5),
    fontSize: totalSize(1.7),
  },
  notificationText: {
    fontFamily: fontFamily.appTextBold,
    color: colors.appTextColor6,
    paddingLeft: width(2.5),
    fontSize: totalSize(1.4),
  },
  gameChangerIcon: {
    width: totalSize(1.7),
    height: totalSize(1.7),
  },
  notificationIcon: {
    width: totalSize(2.5),
    height: totalSize(2.5),
  },
});
