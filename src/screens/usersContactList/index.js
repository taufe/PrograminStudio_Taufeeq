import React from 'react';
import {View} from 'react-native';
import {UsersContactDataList} from '../../components/listComponent';
import {colors} from '../../constants';

const UsersContactList = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.appBgColor1}}>
      <UsersContactDataList
        onPressContact={item => navigation.navigate('UserContactView', {item})}
      />
    </View>
  );
};

export default UsersContactList;
