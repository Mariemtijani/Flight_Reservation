import React from 'react'
import CityComp from '../Explore/CityComp';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import WishCity from './WishCity';
import Footer from '../Footer/Footer'
import './wishCity.css'
import { GoAlertFill } from "react-icons/go";


export default function Wishlist() {


    const favCities = useSelector(state => state.FavoriteReducer.cities);

    const dispatch = useDispatch()

    const deleteFromWishList = (id) => {
      dispatch({
        type: 'delete',
        payload : { id: id },
      })
    }
  return (

    
    <div>
      <div className='wishlistContainer'>



<div className="head">
    <h2>My Wishlist ({favCities.length})</h2>
    <Link to='/explore'><button className='btn'>Explore destination</button></Link>
</div>
<div className="alert">
          <p><GoAlertFill className='icon'/> Your Wishlist will disappear in 7 days. <Link to='/signIn' className='link'>Sign in</Link> to keep your saved destinations</p>
        </div>
    <div className="items">
    {favCities.map((city) => {
         return <WishCity key = {city.id}  
         index ={city.index} 
         cityName={city.name}
          price={city.price}
          deleteFromWishList = {() => deleteFromWishList(city.id)}/>
    })}
    </div>

   
  
</div>

    <Footer />
    </div>
  )
}
