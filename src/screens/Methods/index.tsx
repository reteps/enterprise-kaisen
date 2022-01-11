import React from 'react'
import BaseMethod from 'components/BaseMethod'
import { Text } from 'react-native'

const InnovationMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='Innovation' next='InnovationDetail'>
        <Text> innovation content </Text>
    </BaseMethod>
}

const DMADVMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='DMADV' next='DMADVDetail'>
        <Text> dmadv content </Text>
    </BaseMethod>
}

const IDDOVMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='IDDOV' next='IDDOVDetail'>
        <Text> iddov content </Text>
    </BaseMethod>
}

const EightDMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='8D' next='EightDDetail'>
        <Text> 8D content </Text>
    </BaseMethod>
}

const SpecialMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='Special Case' next='SpecialDetail'>
        <Text> special content </Text>
    </BaseMethod>
}

const DMAICMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='DMAIC' next='DMAICDetail'>
        <Text> dmaic content </Text>
    </BaseMethod>
}
const BBPMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='BBP' next='BBPDetail'>
        <Text> bbp content </Text>
    </BaseMethod>
}

export { InnovationMethod, DMADVMethod, IDDOVMethod, EightDMethod, SpecialMethod, DMAICMethod, BBPMethod }