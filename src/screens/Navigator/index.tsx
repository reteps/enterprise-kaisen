import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlgorithmStart from 'screens/Algorithm'
import { Situation, SolutionNew, SolutionExists, ConditionKnown, ConditionUnknown } from 'screens/Decisions'
import { InnovationMethod, DMADVMethod, IDDOVMethod, EightDMethod, SpecialMethod, DMAICMethod, BBPMethod } from 'screens/Methods'
import ConfusedScreen from 'screens/Confused';
const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="AlgorithmStart" component={AlgorithmStart}/>
                <Stack.Screen name="Situation" component={Situation}/>
                <Stack.Screen name="SolutionNew" component={SolutionNew}/>
                <Stack.Screen name="SolutionExists" component={SolutionExists}/>
                <Stack.Screen name="ConditionKnown" component={ConditionKnown}/>
                <Stack.Screen name="ConditionUnknown" component={ConditionUnknown}/>
                <Stack.Screen name="InnovationMethod" component={InnovationMethod}/>
                <Stack.Screen name="DMADVMethod" component={DMADVMethod}/>
                <Stack.Screen name="IDDOVMethod" component={IDDOVMethod}/>
                <Stack.Screen name="EightDMethod" component={EightDMethod}/>
                <Stack.Screen name="SpecialMethod" component={SpecialMethod}/>
                <Stack.Screen name="DMAICMethod" component={DMAICMethod}/>
                <Stack.Screen name="BBPMethod" component={BBPMethod}/>
                <Stack.Screen name="Confused" component={ConfusedScreen} />
            </Stack.Navigator>
    )
}

export default Navigator