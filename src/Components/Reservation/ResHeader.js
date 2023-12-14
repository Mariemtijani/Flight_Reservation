import React from 'react'
import { MdConnectingAirports } from "react-icons/md";
import './result.css'
import { IoMdPerson } from "react-icons/io";

export default function ResHeader(props) {
  return (
    <div className='resHeaderContainer'>
         <div className="choice">
            <h4>{props.departCity}</h4>
            <MdConnectingAirports className='icon' />
            <h4>{props.returnCity}</h4>
        </div>
        <div className="tripDate">
            <span>{props.tripChoice} </span>
            <span>{props.dateDepart} - {props.dateReturn}</span>
            <div className='pasCount'>
                <span className='count'>{props.pasCount}</span>
                <span><IoMdPerson className='icon'/></span>
                </div>
        </div>
      
    </div>
  )
}
