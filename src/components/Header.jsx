import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import Logo from '../assets/images/GeradorDeOrçamentos.png';

export default function App() {
  return (
    <View style={styles.header}>
      <Image  source={Logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:(Platform.OS == 'android') ? 60 : 30
  },
});
