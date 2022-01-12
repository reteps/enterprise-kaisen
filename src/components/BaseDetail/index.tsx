import React, { useEffect, useState } from 'react'

import { View, TouchableOpacity, Linking, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AppText from 'components/AppText';

const Styled = {
    SafeAreaView: styled(SafeAreaView)`
        flex: 1;
    `,
    Container: styled(View)`
        display: flex;
    `,
    PDFPortrait: styled(Pdf)`
        display: flex;
        width: 100%;
        height: 80%;
    `,
    PDFFull: styled(Pdf)`
        display: flex;
        width: 100%;
        height: 100%;
    `,
    Footer: styled(View)`
        display: flex;
        width: 100%;
    `,
    FooterButtons: styled(View)`
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: row;
    `,
    FooterButton: styled(TouchableOpacity)`
        height: 50px;
        display: flex;
        flex-direction: row;
        padding: 10px;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
    PrimaryIcon: styled(FontAwesomeIcon).attrs({
        size: 20
    })`
        color: #C13294;
        margin-right: 5px;
    `,
    FooterText: styled(AppText)`
        color: #C13294;
        font-size: 20px;
    `,
    BigText: styled(AppText)`
        font-size: 40px;
        text-align: center;
        margin-bottom: 10px;
    `,
    HintText: styled(AppText)`
        text-align: center;
        margin-top: 10px;
        font-size: 25px;
    `
}

const BaseDetail = ({ asset }) => {
    const [currentOrientation, setCurrentOrientation] = useState(Orientation.getInitialOrientation());
    const onOrientationDidChange = (orientation) => {
        setCurrentOrientation(orientation);
        console.log(`Orientation Changed: ${orientation}`)
    }
    useEffect(() => {
        Orientation.addOrientationListener(onOrientationDidChange);
    })

    const footer = <Styled.Footer>
        <Styled.BigText>Questions?</Styled.BigText>
        <Styled.FooterButtons>
            <Styled.FooterButton onPress={() => Linking.openURL('https://enterprisekaizen.com/')}>
                <Styled.PrimaryIcon icon={ faGlobe } />
                <Styled.FooterText>Visit our site</Styled.FooterText>
            </Styled.FooterButton>
            <Styled.FooterButton onPress={() => Linking.openURL('mailto:thom@enterprisekaisen.com')}>
                <Styled.PrimaryIcon icon={ faPaperPlane } />
                <Styled.FooterText>Contact Us </Styled.FooterText>
            </Styled.FooterButton>
        </Styled.FooterButtons>
    </Styled.Footer>
    const hint = <Styled.Footer>
    <Styled.HintText>Rotate to go fullscreen</Styled.HintText>
    </Styled.Footer>

    const portraitPDF =  <Styled.PDFPortrait source={asset} 
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
        >
        {hint}
    </Styled.PDFPortrait>
    const fullPDF =  <Styled.PDFFull source={asset} 
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
        >
    </Styled.PDFFull>
    return (
        <Styled.SafeAreaView>

        <Styled.Container>
            {currentOrientation == 'PORTRAIT' ? portraitPDF : fullPDF}
            {currentOrientation == 'PORTRAIT' && footer}
        </Styled.Container>
        </Styled.SafeAreaView>
    )
}

export default BaseDetail