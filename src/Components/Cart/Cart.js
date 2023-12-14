import React from 'react';
import './cart.css';
import Ticket from './Ticket';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/dist';

export default function Cart() {
  const selectedTickets = useSelector(state => state.PanierReducer.tickets);
  console.log(selectedTickets);

  const dispatch = useDispatch();

  const deleteFromCart = (id) => {
    dispatch({
        type:'deleteP',
        payload : {id:id}
    })
  }

  let total = 0;

  selectedTickets.map((e) => {
    return total += e.price
  })

  return (
    <div className='cartContainer'>
      <h2>My cart</h2>
      <h4>Total :{total} $</h4>

      {selectedTickets.map((ticket, ind) => (
        <Ticket key={ind} dateDepart={ticket.date} timeDepart={ticket.timeDepart}
         timeArrive={ticket.timeArrive} price={ticket.price} 
         departCity = {ticket.departCity} returnCity = {ticket.returnCity}
         deleteFromCart = {() => deleteFromCart(ticket.id)}/>
      ))}

      <Link to={`/paiment/${total}`}><button className="btn2 btn">Go to paiment</button></Link>
    </div>
  );
}
