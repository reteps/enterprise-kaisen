import React from 'react'
import BaseMethod from 'components/BaseMethod'
import AppText from 'components/AppText'

const InnovationMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='Innovation' next='InnovationDetail'>
        <AppText> innovation content </AppText>
    </BaseMethod>
}

const DMADVMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='DMADV' next='DMADVDetail'>
        <AppText> dmadv content </AppText>
    </BaseMethod>
}

const IDDOVMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='IDDOV' next='IDDOVDetail'>
        <AppText> iddov content </AppText>
    </BaseMethod>
}

const EightDMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='8D' next='EightDDetail'>
        <AppText> 8D content </AppText>
    </BaseMethod>
}

const SpecialMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='Special Case' next='SpecialDetail'>
        <AppText> special content </AppText>
    </BaseMethod>
}

const DMAICMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='DMAIC' next='DMAICDetail'>
        <AppText> dmaic content </AppText>
    </BaseMethod>
}
const BBPMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='BBP' next='BBPDetail'>
        <AppText> bbp content </AppText>
    </BaseMethod>
}

export { InnovationMethod, DMADVMethod, IDDOVMethod, EightDMethod, SpecialMethod, DMAICMethod, BBPMethod }