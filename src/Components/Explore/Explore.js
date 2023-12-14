import React from 'react'
import CityComp from './CityComp'
import city from '../../assests/Images/city.jpg'
import exploreData from '../Data/ExploreData'
import { useSelector,useDispatch } from 'react-redux'
import Footer from '../Footer/Footer'

export default function Explore() {

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
    <div className="exploreContainer">
      <h2>Explore destinations</h2>
    <div className='allExplore'>
    {exploreData.map((city,ind) => {

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
  
      <button class="button">
          <svg class="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#ffffff" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
          <span class="lable">Load more</span>
      </button>

      <Footer/>

    </div>
  )
}
