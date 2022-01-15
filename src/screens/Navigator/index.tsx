import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlgorithmStart from 'screens/Algorithm'
import { Situation, SolutionNew, SolutionExists, ConditionKnown, ConditionUnknown } from 'screens/Decisions'
import { InnovationMethod, DMADVMethod, IDDOVMethod, EightDMethod, DMAICMethod, BBPMethod } from 'screens/Methods'
import { InnovationDetail, DMADVDetail, IDDOVDetail, EightDDetail, DMAICDetail, BBPDetail } from 'screens/Details'
import ConfusedScreen from 'screens/Confused';
const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="AlgorithmStart" component={AlgorithmStart} options={{ title: 'Algorithm Start' }}/>
                <Stack.Screen name="Situation" component={Situation} options={{ title: 'Situation' }}/>
                <Stack.Screen name="SolutionNew" component={SolutionNew} options={{ title: 'New Solution' }}/>
                <Stack.Screen name="SolutionExists" component={SolutionExists} options={{ title: 'Existing Solution' }}/>
                <Stack.Screen name="ConditionKnown" component={ConditionKnown} options={{ title: 'Known Condition' }}/>
                <Stack.Screen name="ConditionUnknown" component={ConditionUnknown} options={{ title: 'Unknown Condition' }}/>
                <Stack.Screen name="InnovationMethod" component={InnovationMethod} options={{ title: 'Innovation Method' }}/>
                <Stack.Screen name="DMADVMethod" component={DMADVMethod} options={{ title: 'DMADV Method' }}/>
                <Stack.Screen name="IDDOVMethod" component={IDDOVMethod} options={{ title: 'IDDOV Method' }}/>
                <Stack.Screen name="EightDMethod" component={EightDMethod} options={{ title: '8D Method' }}/>
                <Stack.Screen name="DMAICMethod" component={DMAICMethod} options={{ title: 'DMAIC Method' }}/>
                <Stack.Screen name="BBPMethod" component={BBPMethod} options={{ title: 'BBP Method' }} />
                <Stack.Screen name="Confused" component={ConfusedScreen}  options={{ title: 'Help' }} />
                <Stack.Screen name="InnovationDetail" component={InnovationDetail} options={{ title: 'Innovation Details' }} />
                <Stack.Screen name="DMADVDetail" component={DMADVDetail} options={{ title: 'DMADV Details' }} />
                <Stack.Screen name="IDDOVDetail" component={IDDOVDetail} options={{ title: 'IDDOV Details' }} />
                <Stack.Screen name="EightDDetail" component={EightDDetail} options={{ title: '8D Details' }} />
                <Stack.Screen name="DMAICDetail" component={DMAICDetail} options={{ title: 'DMAIC Details' }} />
                <Stack.Screen name="BBPDetail" component={BBPDetail} options={{ title: 'BBP Details' }} />
            </Stack.Navigator>
    )
}

export default Navigator