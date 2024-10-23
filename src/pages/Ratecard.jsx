import React from 'react'
import Result from '../Componets/Store/Ratecard/Result'
import Top from '../Componets/Store/Ratecard/Top'
import Info from '../Componets/Store/Ratecard/Info'
import RateGuide from '../Componets/Store/Ratecard/RateGuide'

const RateCard = () => {
  return (
    <div className='p-10'>
        <RateGuide />
        <Result />
        <Top />
        <Info />
    </div>
  )
}

export default RateCard