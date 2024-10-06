import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Icon, Image } from 'react-native-elements';
import fileIcon from './../../../assets/icons/reader.png'
import { colors, fontFamily } from '../../../constants';

export const SeasonButtonsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.consultaButton}>
          <View style={styles.textContainer1}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={fileIcon} style={styles.iconFile} />
              <View style={{ paddingLeft: width(3) }}>
                <Text style={styles.ConsultaText}>Consulta</Text>
                <Text style={styles.ConsultaText}>regolamento</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.disattivaButton}>
          <View style={styles.textContainer2}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ paddingRight: width(3) }}>
                <Text style={styles.DisattivaText}>Disattiva</Text>
                <Text style={styles.DisattivaText}>notifiche</Text>
              </View>
              <Icon name='clockcircleo' type='antdesign' size={totalSize(2.5)} color={colors.appIconColor6} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:10
  },
  buttonWrapper: {
    borderRadius: 8, 
    overflow: 'hidden',
  },
  consultaButton: {
    borderTopWidth: height(7.2),
    borderTopColor: colors.appBgColor18,
    borderRightWidth: width(2.5),
    borderRightColor: 'transparent',
    position: 'relative',
    width: width(46),
  },
  disattivaButton: {
    borderBottomWidth: height(7.2),
    borderBottomColor: colors.appBgColor19,
    borderLeftWidth: width(2.5),
    borderLeftColor: 'transparent',
    position: 'relative',
    width: width(46),
  },
  textContainer1: {
    position: 'absolute',
    left: 20,
    top: -45,
  },
  textContainer2: {
    position: 'absolute',
    right: 20,
    top: 8,
  },
  ConsultaText: {
    color: colors.appTextColor6,
    textAlign: 'left',
    fontFamily:fontFamily.appTextBold,
    fontSize:totalSize(1.5)

  },
  DisattivaText: {
    color: colors.appTextColor6,
    textAlign: 'right',
    fontFamily:fontFamily.appTextBold,
    fontSize:totalSize(1.5)
  },
  iconFile:{
    width:25, 
    height:25
  }
});

