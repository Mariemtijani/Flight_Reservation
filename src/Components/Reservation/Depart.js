import React , {useState} from 'react'
import './result.css'
import { GiAirplaneDeparture } from "react-icons/gi";
import { PiAirplaneTakeoffFill } from "react-icons/pi";

export default function Depart(props) {
    const [isSelected, setIsSelected] = useState(props.isSelected);

    const toggleSelected = () => {
      setIsSelected(!isSelected);

      console.log('Button clicked in Depart component');

            if (!isSelected) {

                props.addToCart();
  }
    };
  return (
    <div>
       <div className="depart">
        <h4><GiAirplaneDeparture className='icon' /> {props.departCity} to {props.returnCity}</h4>

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
                    <span className='old'>{props.oldPrice}$</span>
                    <span className='new'>{props.newPrice}$</span>
                </div>

                <div className="btnSelect">
                    <p>{props.seats} seats left at this price</p>
                    <button className={isSelected ? 'none' : 'btn'} onClick={toggleSelected}>Book Now</button>
                    <span className={isSelected ? 'choosen' : 'none'}>Choosen Flight</span>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}
