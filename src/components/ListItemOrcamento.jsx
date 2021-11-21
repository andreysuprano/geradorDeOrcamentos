import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListItemOrcamento = ({ data }) => {
    return (
        <TouchableOpacity activeOpacity='0.6' style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemP1}>{data.name}</Text>
                <Text style={styles.itemP2}>{data.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderColor: '#ABABAB',
        borderWidth: 2
    },
    itemPhoto: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    itemInfo: {
        marginLeft: 20,
    },
    itemP1: {
        fontSize: 22,
        color: '#525252',
        marginBottom: 5,
        fontWeight:'bold'
    },
    itemP2: {
        fontSize: 18,
        color: '#525252',
        marginBottom: 5
    }
});

export default ListItemOrcamento;