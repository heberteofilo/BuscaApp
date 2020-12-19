import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import axios from 'axios';
import {consultarEndereco} from '../services/apiCep';

export default function BuscaCep() {

    const navigation = useNavigation();
    const [ cep, setCep ] = React.useState();

    const buscaCep = async () => {
        // axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        //     const endereco = {
        //         cep: response.data.cep,
        //         logradouro: response.data.logradouro,
        //         complemento: response.data.complemento,
        //         bairro: response.data.bairro,
        //         localidade: response.data.localidade,
        //         uf: response.data.uf,
        //         ibge: response.data.ibge,
        //         gia: response.data.gia,
        //         ddd: response.data.ddd,
        //         siafi: response.data.siafi,
        //     };   
        const endereco = await consultarEndereco(cep);
            
        navigation.navigate('ResultadoCep', endereco);

        setCep('')

        // }).catch((error) => console.log(error));
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}} >Endereço por CEP</Text>
            <TextInput
            style={styles.textInput}
            value={cep}
            onChangeText={(val) => setCep(val)}
            placeholder="Digite o cep"
            />
            <Button 
            title='Confirmar'
            style={{width: 200, height: 40}}
            onPress={() => buscaCep()}
            />
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
    textInput: {
        borderWidth: 1, 
        borderColor: '#ccc', 
        width: 200, 
        textAlign: 'center', 
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#333',
    }

});