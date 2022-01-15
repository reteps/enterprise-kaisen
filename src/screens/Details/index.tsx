import React from "react";
import BaseDetail from "components/BaseDetail";

const InnovationDetail = () => {
    const asset = require('../../assets/pdfs/INNOVATION.pdf')
    return <BaseDetail asset={asset}/>
}
const DMADVDetail = () => {
    const asset = require('../../assets/pdfs/DMADV.pdf')
    return <BaseDetail asset={asset}/>
}
const IDDOVDetail = () => {
    const asset = require('../../assets/pdfs/IDDOV.pdf')
    return <BaseDetail asset={asset}/>
}
const EightDDetail = () => {
    const asset = require('../../assets/pdfs/8D.pdf')
    return <BaseDetail asset={asset}/>
}
const DMAICDetail = () => {
    const asset = require('../../assets/pdfs/DMAIC.pdf')
    return <BaseDetail asset={asset}/>
}
const BBPDetail = () => {
    const asset = require('../../assets/pdfs/BBP.pdf')
    return <BaseDetail asset={asset}/>
}

export { InnovationDetail, DMADVDetail, IDDOVDetail, EightDDetail, DMAICDetail, BBPDetail }