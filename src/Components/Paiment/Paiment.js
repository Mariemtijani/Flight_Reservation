import React  from 'react'
import './paiment.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import UserInfo from './UserInfo'
import PaimentInfo from './PaimentInfo'
import Confirm from './Confirm'
import { useState } from 'react'
import Indicator from './Indicator/Indicator'
import Footer from '../Footer/Footer'


export default function Paiment() {
  const {total} = useParams();

  const [formIndex, setFormIndex] = useState(1)

  const modifyIndex = () => {
    setFormIndex(formIndex + 1)
  }
  return (

  <div className='pay'>
      
      <div className='paymentContainer'>
      <Indicator formIndex={formIndex}/>

            
           
           

           
{ 

  formIndex === 1 ? <UserInfo /> 
: formIndex === 2 ? <PaimentInfo />
: formIndex === 3 ? <Confirm/>
: ""

}
    </div>
   {formIndex !== 3 ? ( <button className="btn" onClick={modifyIndex}>
      Pay {total}$
    </button>) : ( <button className="btn" onClick={modifyIndex}>
      Submit
    </button>)}

    <Footer />
  </div>
  )
}
