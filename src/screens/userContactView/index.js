import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../constants';
import {width, height} from 'react-native-dimension';
import {totalSize} from 'react-native-dimension';
import {Spacer} from '../../components/spacer';
import { Icon } from 'react-native-elements';

const UserContactView = ({route, navigation}) => {
  const contact = route?.params?.item;

  return (
    <View style={styles.container}>
      <Spacer />
      <View style={styles.heading}>
      <Icon name='arrowleft' type='antdesign' color={colors.appIconColor6} onPress={()=>navigation.goBack()} />
      <Text style={styles.contactView}>Contact View</Text>
      </View>
      <Spacer />
      <View style={styles.viewContainer}>
        {contact?.image && <Image source={contact.image} style={styles.image} />}
        <View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="user"
                type="feather"
                size={totalSize(2.5)}
                color={colors.appIconColor6}
                style={{paddingRight:width(3)}}
              />
              <Text style={styles.name}>{contact?.name}</Text>
            </View>
            <Spacer height={8} />
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="phone"
                type="simple-line-icon"
                size={totalSize(2.4)}
                color={colors.appIconColor6}
                style={{paddingRight:width(3)}}
              />
              <Text style={styles.name}>{contact?.phone}</Text>
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBgColor1,
    flex: 1,
  },
  viewContainer: {
    alignItems: 'center',
    backgroundColor:colors.appBgColor4,
    marginHorizontal:width(5),
    paddingVertical:height(4),
    borderRadius:totalSize(.8),
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.appTextColor6,
    fontSize: totalSize(1.7),
  },
 
  contactView: {
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(2.4),
    color: colors.appTextColor6,
    textAlign: 'center',
    paddingLeft:width(21)
  },
  heading:{
    flexDirection:'row',
    marginHorizontal:width(4)
  }
});

export default UserContactView;
