import React from 'react';
import './result.css';
import { useParams } from 'react-router-dom';
import resData from '../Data/ResData';
import Depart from './Depart';
import Return from './Return';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';

export default function ResBody() {

  const selectedTickets = useSelector(state => state.PanierReducer.tickets);
  const dispatch = useDispatch();

  const addTicket = (id,date, departCity, returnCity, timeDepart, timeArrive, price) => {
    dispatch({
      type: 'addP',
      payload: {
        id,
        date,
        departCity,
        returnCity,
        timeDepart,
        timeArrive,
        price,
      },
    });
  };
  

  const { selectedValue, child, adults, cityDepart, cityReturn, departDate, returnDate, classe, bag } = useParams();

  const matchedTickets = resData.filter(
    (data) => {
      const isMatching =
        data.departCity === cityDepart &&
        data.returnCity.trim() === cityReturn.trim()
        // &&
        // data.departDetails.class.toLowerCase() === classe.toLowerCase() &&
        // data.departDetails.seats >= Number(child) + Number(adults) &&
        // data.departDetails.date.trim() === departDate.trim() &&
        // (selectedValue !== 'Return' || data.returnDetails.date.trim() === returnDate.trim());

      return isMatching;
    }
  );

  return (
    <div className='resBodyContainer'>
      {matchedTickets.length > 0 ? (
        <>
          {matchedTickets.map((data) => {
            const isSelected = selectedTickets.some(ticket => ticket.departCity === data.departCity);

            return (
              <div key={data.id}>
                <Depart
                  departCity={data.departCity}
                  returnCity={data.returnCity}
                  dateDepart={data.departDetails.date}
                  timeDepart={data.departDetails.timeDepart}
                  timeArrive={data.departDetails.timeArrive}
                  oldPrice={data.departDetails.oldPrice}
                  newPrice={data.departDetails.newPrice}
                  seats={data.departDetails.seats}
                  class={classe}
                  isSelected={isSelected}
                  addToCart = {() => addTicket(
                    data.id,
                    data.departDetails.date,
                    data.departCity,
                    data.returnCity,
                    data.departDetails.timeDepart,
                    data.departDetails.timeArrive,
                    data.departDetails.newPrice,
                    
                  )}
                />

                {selectedValue === 'Return' && (
                  <Return
                    departCity={data.departCity}
                    returnCity={data.returnCity}
                    dateReturn={data.returnDetails.date}
                    timeDepart={data.returnDetails.timeDepart}
                    timeArrive={data.returnDetails.timeArrive}
                    oldPrice={data.returnDetails.oldPrice}
                    newPrice={data.returnDetails.newPrice}
                    seats={data.returnDetails.seats}
                    class={classe}
                    isSelected={isSelected}
                    addToCart = {() => addTicket(
                      data.id,
                      data.returnDetails.date,
                    data.returnCity,
                    data.departCity,
                    data.returnDetails.timeDepart,
                    data.returnDetails.timeArrive,
                    data.returnDetails.newPrice,
                    )}
                  />
                )}
              </div>
            );
          })}
        </>
      ) : (
        <div className='noMatch'>No matching flights found.</div>
      )}

      <NewsLetter />

      <div className="fSection" style={{width:'1340px'}}>
        <Footer />
      </div>
      
    </div>
  );
}
