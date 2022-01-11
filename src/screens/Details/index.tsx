import React from "react";
import BaseDetail from "components/BaseDetail";
import styled from 'styled-components/native'

const asset = require('../../assets/pdfs/DMAIC.pdf')
const InnovationDetail = () => {
    return <BaseDetail asset={asset}/>
}
const DMADVDetail = () => {
    return <BaseDetail asset={asset}/>
}
const IDDOVDetail = () => {
    return <BaseDetail asset={asset}/>
}
const EightDDetail = () => {
    return <BaseDetail asset={asset}/>
}
const SpecialDetail = () => {
    return <BaseDetail asset={asset}/>
}
const DMAICDetail = () => {
    return <BaseDetail asset={asset}/>
}
const BBPDetail = () => {
    return <BaseDetail asset={asset}/>
}

export { InnovationDetail, DMADVDetail, IDDOVDetail, EightDDetail, SpecialDetail, DMAICDetail, BBPDetail }