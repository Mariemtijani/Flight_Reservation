import React from 'react'
import './flight.css'
import { useParams } from 'react-router-dom'

export default function FlightInfo() {

  const {total} = useParams()
  return (
    <div class="card-conteiner">
  <div class="card-content">
    <div class="card-title">Total <span>Price</span></div>
    <div class="values">
      <div>$<span id="first">{total}</span></div> 
      
    </div>
    
  </div>
</div>
  )
}
