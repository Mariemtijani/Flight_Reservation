import React from 'react'
import './wishCity.css'
import { MdDelete } from "react-icons/md";


export default function WishCity(props) {
  return (
    <div>
       <div className='city-container'>
          <section className='cities'>
            <article>
              <figure>
                <img src={process.env.PUBLIC_URL + `/Imgs/city${props.index}.jpg`} />
              </figure>
              <div className='city-info'>
                <h4>{props.cityName}</h4>
                <span>From {props.price}$</span>
                <button className='btn'>Start palnning</button>
                <MdDelete className='icon' onClick={props.deleteFromWishList}/>
              </div>
            </article>
          </section>
    </div>
    </div>
  )
}
