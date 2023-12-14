import React , {useState} from 'react';
import MasterCard from './Imgs/Mastercard.png'
import visa from './Imgs/visa.png';
import paypal from './Imgs/paypal.png';
import './paimentInfo.css'
import FlightInfo from './FlightInfo';
import { useParams } from 'react-router-dom';

export default function PaymentInfo() {



  const [payType, setPayType] = useState();

  return (
   <div className='flex' style={{gap:'100px'}}>

   
     <div className='paymentInfo'>
      <h2>Payment Form</h2>
        <form action="">
          <div className='methods'>
            <div className="master">
                <input type="radio" name="payment" id=""  value='master card'
                onClick={(e) => {setPayType(e.target.value)}}/>
                <img src={MasterCard} alt="" />
            </div>

               <div className="visa">
                    <input type="radio" name="payment" id=""  value='visa'
                  onClick={(e) => {setPayType(e.target.value)}}/>
                  <img src={visa} alt="" />
               </div>

              <div className="paypal">
              <input type="radio" name="payment" id=""  value='paypal'
             onClick={(e) => {setPayType(e.target.value)}}/>
             <img src={paypal} alt="" />
              </div>

               <div className="cash">
               <input type="radio" name="payment" id=""  value='cash on delevry'
             onClick={(e) => {setPayType(e.target.value)}}/>
             <h4>CASH ON DELEVRY</h4>
               </div>
          </div>

         <div className="cardInfo">
         <div className="row flex">
            <div className="col">
              <label htmlFor="" className="form-label">Card number</label>
              <input type="text" name="" id="" className='form-control' />
            </div>
            <div className="col">
            <label htmlFor="" className="form-label">Card Holder</label>
              <input type="text" name="" id=""  className='form-control'/>
            </div>
          </div>

          <div className="row flex">
            <div className="col">
            <label htmlFor="" className="form-label">Expiry date</label>
              <input type="date" name="" id="" className='form-control'/>
            </div>
            <div className="col">
            <label htmlFor="" className="form-label">CVC</label>
              <input type="number" name="" id="" className='form-control'/>
            </div>
          </div>
         </div>

         <div className="d-grid">
          <input type="button" value="Submit" className='btn '/>
         </div>
        </form>
      
    </div>

    <FlightInfo />
   </div>
  )
}