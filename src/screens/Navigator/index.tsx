import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlgorithmStart from 'screens/Algorithm'
const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AlgorithmStart" component={AlgorithmStart}/>
        </Stack.Navigator>
    )
}

export default Navigator