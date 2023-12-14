import React from 'react'
import Nav from './Components/Navbar/Nav'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIN/SignIn'
import Explore from './Components/Explore/Explore'
import Wishlist from './Components/Wishlist/Wishlist'
import Result from './Components/Reservation/Result'
import Cart from './Components/Cart/Cart'
import Paiment from './Components/Paiment/Paiment'
import PaimentInfo from './Components/Paiment/PaimentInfo'


const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/Flight_Reservation' element = {<Home />}/>
        <Route path='/wishlist' element = {<Wishlist />}/>
        <Route path='/signIn' element = {<SignIn />}/>
        <Route path='/explore' element = {<Explore />}/>
        <Route path='/cart' element = {<Cart />}/>
        <Route path='/paiment/:total' element = {<Paiment />}/>
        <Route path='/paimentInfo' element = {<PaimentInfo />}/>
        <Route path='/result/:selectedValue/:child/:adults/:cityDepart/:cityReturn/:departDate/:returnDate/:classe/:bag' element = {<Result />} />

      </Routes>
      
      
    </div>
  )
}

export default App

