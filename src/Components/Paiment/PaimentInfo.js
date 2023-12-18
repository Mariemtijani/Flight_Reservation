import React from 'react'
import './paimentInfo.css'
import { useParams } from 'react-router-dom'
import FlightInfo from './FlightInfo'
export default function PaimentInfo() {

  const {total} = useParams()
  return (
 
  <div className="modal">
     
    <div className="modal__container">
   <FlightInfo />
      <div className="modal__featured">
        
      <div className="modal__content">
        <h2>Your payment details</h2>
        <form>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Name</label>
              <input type="text" name required />
            </li>
            <li className="form-list__row">
              <label>Card Number</label>
              <div id="input--cc" className="creditcard-icon">
                <input type="text" name="cc_number" required />
              </div>
            </li>
            <li className="form-list__row form-list__row--inline">
              <div>
                <label>Expiration Date</label>
                <div className="form-list__input-inline">
                  <input type="text" name="cc_month" placeholder="MM" pattern="\\d*" minLength={2} maxLength={2} required />
                  <input type="text" name="cc_year" placeholder="YY" pattern="\\d*" minLength={2} maxLength={2} required />
                </div>
              </div>
              <div>
                <label>
                  CVC
                </label>
                <input type="text" name="cc_cvc" placeholder={123} pattern="\\d*" minLength={3} maxLength={4} required />
              </div>
            </li>
            <li className="form-list__row form-list__row--agree">
              <label>
                <input type="checkbox" name="save_cc" defaultChecked="checked" />
                Save my card for future purchases
              </label>
            </li>
          </ul>
        </form>
      </div> 
    </div> 
  </div> 
</div>

  )
}
