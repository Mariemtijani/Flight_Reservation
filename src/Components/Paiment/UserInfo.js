import React from 'react'
import FlightInfo from './FlightInfo'
import './paimentInfo.css'

export default function UserInfo(props) {
  return (
    <div>
      
      <div className="modal">
     
     <div className="modal__container" style={{width:'1600px'}}>
    <FlightInfo />
       <div className="modal__featured">
         
       <div className="modal__content">
         <h2>Your personal details</h2>
         <form>
           <ul className="form-list">
             <li className="form-list__row">
               <label> First Name</label>
               <input type="text" name required  />
             </li>
             <li className="form-list__row">
               <label> Last Name</label>
               <input type="text" name required />
             </li>
             
             <li className="form-list__row form-list__row--inline">
               <div>
                 <label>
                   Email
                 </label>
                 <input type="email" name="cc_cvc"   required />
               </div>
             </li>
             <li>
             <div className='form-list__row'>
                 <label>Birthday</label>
                 <div className="form-list__input-inline">
                   <input type="date" name="cc_month" placeholder=""  required />
                  </div>
               </div>
             </li>
            
           </ul>
         </form>
       </div> 
     </div> 
   </div> 
 </div>
    </div>
  )
}
