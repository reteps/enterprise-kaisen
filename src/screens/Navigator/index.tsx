import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlgorithmStart from 'screens/Algorithm'
import { Situation, SolutionNew, SolutionExists, ConditionKnown, ConditionUnknown } from 'screens/Decisions'
import { InnovationMethod, DMADVMethod, IDDOVMethod, EightDMethod, SpecialMethod, DMAICMethod, BBPMethod } from 'screens/Methods'
import { InnovationDetail, DMADVDetail, IDDOVDetail, EightDDetail, SpecialDetail, DMAICDetail, BBPDetail } from 'screens/Details'
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
                <Stack.Screen name="InnovationDetail" component={InnovationDetail}/>
                <Stack.Screen name="DMADVDetail" component={DMADVDetail}/>
                <Stack.Screen name="IDDOVDetail" component={IDDOVDetail}/>
                <Stack.Screen name="EightDDetail" component={EightDDetail}/>
                <Stack.Screen name="SpecialDetail" component={SpecialDetail}/>
                <Stack.Screen name="DMAICDetail" component={DMAICDetail}/>
                <Stack.Screen name="BBPDetail" component={BBPDetail}/>
            </Stack.Navigator>
    )
}

export default Navigator