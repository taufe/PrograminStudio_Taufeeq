import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export const HeaderComponent = ({title, MarginLeft  }) => {
const navigation = useNavigation()
    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 5, padding: 5 }}>
                <Ionicons name="arrow-back" size={22} color="#fff" />
    
            </TouchableOpacity>
            <Text style={{...styles.title, marginLeft:MarginLeft}}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
     mainView :{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#529bb6',
        // width:width(100)
        paddingTop:height(6), 
        paddingHorizontal:width(5),
        paddingBottom:height(3)
    },
    title: {
        fontSize: 20,
        color: "#333",
        color: "#fff",
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    
      },
})
