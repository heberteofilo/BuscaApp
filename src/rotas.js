import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import BuscaCep from './pages/buscaCep';
import ResultadoCep from './pages/resultadoCep';
import ResultadoHistorico from './pages/resultadoHistorico';

export default function Rotas() {
    return (
        <Stack.Navigator
        initialRouteName='BuscaCep'
        >
            <Stack.Screen name='BuscaCep' component={BuscaCep} options={{
                headerTitle: 'Consulta CEP',
                headerTitleAlign: 'center',

            }}/>
            <Stack.Screen name='ResultadoCep' component={ResultadoCep}/>
            <Stack.Screen name='ResultadoHistorico' component={ResultadoHistorico} options={{
                title: 'Histórico de consulta'
            }}/>
        </Stack.Navigator>
    )
}
