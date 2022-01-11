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
        width: 300px;
        height: 500px;
    `
}

const ConfusedScreen = ({ navigation }) => {
    // const source = { uri: 'bundle-assets://slides/confused.pdf' }
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    return (
        <Styled.Container>
            <Styled.PDF source={source} 
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