import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Historico from './historico';

export default function ResultadoHistorico() {

    const [ total, setTotal ] = React.useState('');

    const alternativo = [
        { id: 1,
            validate: false,
            message: 'Nenhum dado foi encontrado',
            data: {
                logradouro: '',
                bairro: '',
                localidade: '',
                uf: '',
            }
        },
    ];
    
    const renderItem = ({item}) => (
        < Historico item={item} />
    );

    return (
        <View style={styles.container}>

            <FlatList             
            data={!!total ? total : alternativo}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },

});
