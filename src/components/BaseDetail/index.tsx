import React, { useEffect } from 'react'

import { View, Text, TouchableOpacity, Linking } from 'react-native'
import styled from 'styled-components/native'
import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Styled = {
    Container: styled(View)`
        display: flex;
    `,
    PDF: styled(Pdf)`
        display: flex;
        width: 100%;
        background: red;
        height: 80%;
    `
}

const BaseDetail = ({ asset }) => {
    const onOrientationDidChange = (orientation) => {
        console.log(`Orientation Changed: ${orientation}`)
    }
    useEffect(() => {
        Orientation.addOrientationListener(onOrientationDidChange);
    })
    return (
        <Styled.Container>
            <Styled.PDF source={asset} 
            horizontal={true}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            />
            <Text>Rotate to go fullscreen</Text>

            <Text>Questions?</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://enterprisekaizen.com/')}>
                <FontAwesomeIcon icon={ faGlobe } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:thom@enterprisekaisen.com')}>
                <FontAwesomeIcon icon={ faPaperPlane } />
            </TouchableOpacity>
        </Styled.Container>
    )
}

export default BaseDetail