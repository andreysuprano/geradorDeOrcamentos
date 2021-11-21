import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';

import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';


export default function App() {
    return (
        <SafeAreaView>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Faturamento</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.textCard}>Orçamentos fechados</Text>
                        <Text style={styles.valueCard}>10</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.textCard}>Orçamentos abertos</Text>
                        <Text style={styles.valueCard}>10</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.lucro}>Lucro:<Text style={styles.valueBold}> R$2350,00</Text></Text>
                    <Text style={styles.lucro}>Lucro:<Text style={styles.valueBold}> R$2350,00</Text></Text>
                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontSize: 24
    },
    cardContainer: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    card: {
        width: 150,
        height: 130,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#ABABAB',
        borderWidth: 2,
        alignItems: 'center'
    },
    textCard: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: '300'
    },
    valueCard: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    lucro: {
        fontSize: 18,
        marginTop: 10,
        fontSize: 24
    },
    valueBold: {
        fontWeight: 'bold'
    },
    description:{
        justifyContent:'flex-start'
    }
});
