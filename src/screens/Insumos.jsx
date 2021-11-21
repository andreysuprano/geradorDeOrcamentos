import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';

import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

import ListItem from '../components/ListItem';
import results from '../mocks/results';

export default function App() {
  const [list, setList] = useState(results);

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Insumos</Text>
        <Button style={styles.button} text="Novo" color="#DDD"/>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    width:'100%',
  },
  title:{
    fontSize:18, 
    marginTop:10,
    fontSize:24
  },
  button:{
    width:'85%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2AAF14',
    paddingVertical:15,
    borderRadius:5,
    marginTop:20
  },
  list:{
    marginTop:20,
    width:'100%',
    height:'75%'
  }
});
