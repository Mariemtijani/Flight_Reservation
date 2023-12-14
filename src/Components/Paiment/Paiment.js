import React from 'react'
import Info from './Info'
import FlightInfo from './FlightInfo'
import './paiment.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import airp from './Imgs/airp.jpg'


export default function Paiment() {
  const {total} = useParams();
  return (

  <div className='pay'>
      
      <div className='paymentContainer'>
         <FlightInfo />
        <Info />
        {/* <img src={airp} alt=""  style={{width:'400px', height:'400px',marginLeft:'150px', borderRadius:'20px',marginTop:'120px'}}/>
      */}
      
    </div>
    <Link to='/paimentInfo'><button className="btn">Pay {total}$</button></Link>
  </div>
  )
}
