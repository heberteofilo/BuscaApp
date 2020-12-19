import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ResultadoCep({ route }) {

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 25, marginBottom: 10}}>Endereço</Text>
            {/* <Text style={{fontSize: 20}}>Cep: {route.params.cep}</Text> */}
            <Text style={{fontSize: 20}}>Logradouro: {route.params.logradouro}</Text>
            {/* <Text style={{fontSize: 20}}>Complemento: {route.params.complemento}</Text> */}
            <Text style={{fontSize: 20}}>Bairro: {route.params.bairro}</Text>
            <Text style={{fontSize: 20}}>Cidade: {route.params.localidade}</Text>
            <Text style={{fontSize: 20}}>UF: {route.params.uf}</Text>
            {/* <Text style={{fontSize: 20}}>IBGE: {route.params.ibge}</Text>
            <Text style={{fontSize: 20}}>Gia: {route.params.gia}</Text>
            <Text style={{fontSize: 20}}>DDD: {route.params.ddd}</Text>
            <Text style={{fontSize: 20}}>SIAFI: {route.params.siafi}</Text> */}

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },

});