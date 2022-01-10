import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlgorithmStart from 'screens/Algorithm'
import { Page1 } from 'screens/Decisions'
const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="AlgorithmStart" component={AlgorithmStart}/>
                <Stack.Screen name="Page1" component={Page1}/>
            </Stack.Navigator>
    )
}

export default Navigator