import React , {useState} from 'react'
import '../Reservation/result.css'
import './cart.css'
import { GiAirplaneDeparture } from "react-icons/gi";
import { PiAirplaneTakeoffFill } from "react-icons/pi";

export default function Ticket(props) {
    
  return (
    <div>
       <div className="ticketContainer">
       

        <div className="ticket">
            <div className="dateSection">
                {props.dateDepart} 
            </div>

            <div className="timeSection">
                <div className="timeDepart">
                    <h6>{props.timeDepart}</h6>
                    <span>{props.departCity}</span>
                </div>
                <div className="midle">
                    <div className="line1">

                    </div>
                    <span className="icon">
                        <PiAirplaneTakeoffFill />
                    </span>
                    <div className="line1">

                    </div>
                </div>
                <div className="timeDepart">
                    <h6>{props.timeArrive}</h6>
                    <span>{props.returnCity}</span>
                </div>
            </div>

            <div className="priceSection">
                <div className='price'>
                    <span className='class'>{props.class}</span>
                    <span className='new'>{props.price}$</span>
                </div>
                <div className="deletBtn">
                    <button className='btn' onClick={props.deleteFromCart}>Delete</button>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}
