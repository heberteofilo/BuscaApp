import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Historico = React.memo(({item}) => {
    if (item.validate) {
        return (
            <View style={[styles.container]}>
                <Text style={{fontSize: 25, marginBottom: 10}}>Endereço</Text>
                <Text style={{fontSize: 20}}>Logradouro: {item.data.logradouro}</Text>
                <Text style={{fontSize: 20}}>Bairro: {item.data.bairro}</Text>
                <Text style={{fontSize: 20}}>Cidade: {item.data.localidade}</Text>
                <Text style={{fontSize: 20}}>UF: {item.data.uf}</Text>
            </View>
        ); 
    } else {
        return (
            <View style={[styles.container]}>
                <Text style={{fontSize: 25, marginBottom: 10}}>Endereço</Text>
                <Text style={{fontSize: 20}}>Histórico: {item.message}</Text>

            </View>
        );
    }
})

export default Historico;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});