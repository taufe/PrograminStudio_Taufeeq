import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {width, totalSize, height} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import {Spacer} from '../../../components/spacer';
import {colors, fontFamily} from '../../../constants';

export const ContactListComponent = ({image, name, phone, onPressContact}) => {
  return (
    <TouchableOpacity onPress={onPressContact} style={styles.contactCard}>
      <View style={styles.contactWrapper}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style={styles.image} />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="user"
                type="feather"
                size={totalSize(2.5)}
                color={colors.appIconColor6}
              />
              <Text style={styles.name}>{name}</Text>
            </View>
            <Spacer height={8} />
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="phone"
                type="simple-line-icon"
                size={totalSize(2.4)}
                color={colors.appIconColor6}
              />
              <Text style={styles.phone}>{phone}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPressContact} style={styles.viewButtonWrapper}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactWrapper: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: width(3),
  },
  name: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.appTextColor6,
    fontSize: totalSize(1.6),
    marginLeft: width(3),
  },
  phone: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.appTextColor6,
    fontSize: totalSize(1.6),
    marginLeft: width(3),
  },
  viewText: {
    color: colors.appTextColor6,
    fontFamily: fontFamily.appTextMedium,
    fontSize: totalSize(1.6),
  },
  contactCard: {
    backgroundColor: colors.appBgColor4,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: width(4),
  },
  viewButtonWrapper: {
    backgroundColor: colors.appBgColor22,
    paddingHorizontal: width(5),
    paddingVertical: height(0.6),
    borderRadius: totalSize(0.8),
  },
});
