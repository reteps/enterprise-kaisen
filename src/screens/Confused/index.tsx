import React from 'react'
import styled from 'styled-components/native'
import Pdf from 'react-native-pdf'
import { View } from 'react-native'

const Styled = {
    Container: styled(View)`
        display: flex;
    `,
    PDF: styled(Pdf)`
        display: flex;
        width: 100%;
        height: 100%;
    `
}

const ConfusedScreen = ({ navigation }) => {
    const source = require('../../assets/pdfs/problem_solving_steps.pdf')
    return (
        <Styled.Container>
            <Styled.PDF source={source} 
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
        </Styled.Container>
    )
}

export default ConfusedScreen