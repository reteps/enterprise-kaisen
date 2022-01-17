import React from 'react'
import { Image, View,StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import BaseMethod from 'components/BaseMethod'
import AppText from 'components/AppText'

var styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
})

const Styled = {
    Image: styled(Image).attrs({
        resizeMode: 'contain'
    })`
    flex: 1;
`,
    ImageContainer: styled(View)`
        width: 100%;
        padding: 10px;
        height: 50%;
    `
}

const InnovationMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='Innovation' next='InnovationDetail'>
        <Styled.ImageContainer>
        <Image style={styles.image} source={require('assets/content/info_INNOVATION.pdf.png')} />
        </Styled.ImageContainer>
    </BaseMethod>
}

const DMADVMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='DMADV' next='DMADVDetail'>
        <Styled.ImageContainer>
        <Image style={styles.image} source={require('assets/content/info_DMADV.pdf.png')} />
        </Styled.ImageContainer>
    </BaseMethod>
}

const IDDOVMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='IDDOV' next='IDDOVDetail'>
        <Styled.ImageContainer>
        <Image style={styles.image} source={require('assets/content/info_IDDOV.pdf.png')} />
        </Styled.ImageContainer>
    </BaseMethod>
}

const EightDMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='8D' next='EightDDetail'>
        <Styled.ImageContainer>
        <Image style={styles.image} source={require('assets/content/info_8D.pdf.png')} />
        </Styled.ImageContainer>
    </BaseMethod>
}

const DMAICMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='DMAIC' next='DMAICDetail'>
        <Styled.ImageContainer>
        <Image style={styles.image} source={require('assets/content/info_DMAIC.pdf.png')} />
        </Styled.ImageContainer>
    </BaseMethod>
}
const BBPMethod = ({ navigation }) => {
    return <BaseMethod navigation={navigation} name='BBP' next='BBPDetail'>
        <Styled.ImageContainer>
        <Image style={styles.image} source={require('assets/content/info_BBP.pdf.png')} />
        </Styled.ImageContainer>
    </BaseMethod>
}

export { InnovationMethod, DMADVMethod, IDDOVMethod, EightDMethod, DMAICMethod, BBPMethod }