import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import BuscaCep from './pages/buscaCep';
import ResultadoCep from './pages/resultadoCep';

export default function Rotas() {
    return (
        <Stack.Navigator
        initialRouteName='BuscaCep'
        >
            <Stack.Screen name='BuscaCep' component={BuscaCep}/>
            <Stack.Screen name='ResultadoCep' component={ResultadoCep}/>
        </Stack.Navigator>
    )
}
