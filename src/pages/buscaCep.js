import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import axios from 'axios';
import {consultarEndereco} from '../services/apiCep';

export default function BuscaCep() {

    const navigation = useNavigation();
    const [ cep, setCep ] = React.useState();

    const consultarCep = async () => {
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
        try {
            if (cep.length === 8) {
                const endereco = await consultarEndereco(cep)
                
                navigation.navigate('ResultadoCep', endereco);
        
                setCep('')
            } 
        } catch (err) {
            console.log(err);
        }
        // }).catch((error) => console.log(error));
    }

    const consultarHistorico = () => {
        navigation.navigate('ResultadoHistorico');
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

            <TouchableOpacity 
            style={styles.btn}
            onPress={() => consultarCep()}
            >
            <Text style={styles.btnText}>Consultar Endereço</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn}
            onPress={() => consultarHistorico()}
            > 
            <Text style={styles.btnText}>Consultar Histórico</Text>
            </TouchableOpacity>

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
    },
    btn: {
        marginTop: 10,
        height: 40,
        width: 200,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

});