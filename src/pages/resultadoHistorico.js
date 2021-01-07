import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Historico from './historico';
import getRealm from '../services/realm';

export default function ResultadoHistorico() {

    const [ total, setTotal ] = React.useState('');

    const alternativo = [
        { 
            id: 1,
            validade: 'falso',
            message: 'Nenhum dado foi encontrado',
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: '',          
        },
    ];

    React.useEffect(() => {

        async function loadRepository() {
            const realm = await getRealm();
            
            try {
            const data = await realm.objects('Enderecos').sorted('id', true);

            setTotal(data.length > 0 ? data : '');  

            } catch (err) {
                console.log(err);
            }
        }

        loadRepository();
    },[])
    
    const renderItem = ({item}) => (
        < Historico item={item} />
    );

    console.log(total)

    return (
        <View style={styles.container}>

            <FlatList  
            keyboardShouldPersistTaps="handled"           
            data={!!total ? total : alternativo}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
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

// await realm.write(() => {
//     realm.deleteAll();
// })
