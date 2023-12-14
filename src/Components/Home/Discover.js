import React, { useState } from 'react'
import CityComp from '../Explore/CityComp'
import { Link } from 'react-router-dom';
import homeData from '../Data/HomeData';
import { useSelector, useDispatch } from 'react-redux';

export default function Discover() {

  const favCities = useSelector(state => state.FavoriteReducer.cities);


  const dispatch = useDispatch();

 

  const addToWishlist = (id,name,price,index) => {
    dispatch({
      type: 'add',
      payload : {id:id,name:name,price:price,index:index}
    })
  }

  const deleteFromWishlist = (id) => {
    dispatch({
      type: 'delete',
      payload : { id: id },
    })
  }


 
 
  return (
    <div className=' container discoverContainer'>
      <div className="discoverHead flex">
            <div className="discoverText">
                <h2>Explore the world from Tangier</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="discoverBtn">
            <Link className = 'navLink' to='/explore'><button type="button" className='btn'>See more</button></Link>
            </div>
      </div>
      <div className="articles">
        {homeData.map((city,ind) => {

          const isCityFavorite = favCities.some(favCity => favCity.name === city.name);

            return <CityComp key = {city.id}
             id = {city.id} index ={city.index}
              cityName={city.name} price={city.price}
              addToWishList = {() => addToWishlist(city.id,city.name,city.price,city.index)}
              deleteFromWishlist = {() => deleteFromWishlist(city.id)}
              isFavorite={isCityFavorite}
              />
        })}
        
      </div>
    </div>
  )
}
