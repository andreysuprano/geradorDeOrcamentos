import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button(props) {
    return (
        <TouchableOpacity activeOpacity="0.8" style={props.style}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    button:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#2AAF14',
      paddingHorizontal:150,
      paddingVertical:15,
      borderRadius:5
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFF'
    }
  });