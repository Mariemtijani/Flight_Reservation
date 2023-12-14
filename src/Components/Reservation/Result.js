import React from 'react'
import './result.css'
import { GiCommercialAirplane } from "react-icons/gi";
import NewsLetter from '../NewsLetter/NewsLetter'

import ResHeader from './ResHeader';
import ResBody from './ResBody';
import { useParams } from 'react-router-dom';

export default function Result() {

  const {selectedValue,child,adults,cityDepart,cityReturn,departDate,returnDate} = useParams()
  
  return (
    <div className='containerResult'>
    
        <ResHeader departCity = {cityDepart}
         returnCity = {cityReturn}
        tripChoice = {selectedValue} 
        dateDepart = {departDate}
        dateReturn = {returnDate}
        pasCount = {(Number(child) + Number(adults))}/>

        <h2>Flights Result</h2>

        <ResBody />


    </div>
  )
}
