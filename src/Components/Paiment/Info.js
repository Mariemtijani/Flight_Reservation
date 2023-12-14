import React from 'react'
import './info.css'

export default function Info() {
  return (
    <div className='userInfoContainer'>
        <h2>Who's traveling</h2>
      <form class="form">
    <p class="title">Passanger 1 </p>
    
        <div class="flex1">
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="tel" placeholder="" required=""/>
        <span>Phone</span>
    </label>
    
    
</form>
    </div>
  )
}
