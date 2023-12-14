import React, { useState } from 'react';
import './CityComp.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export default function CityComp(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    isFavorite ? props.deleteFromWishlist() : props.addToWishList();
  };

  return (
    <div className='city_container'>
      <span className='background'>
        <span className='centring'>
          <section className='articles'>
            <article>
              <figure>
                <img src={process.env.PUBLIC_URL + `/Imgs/city${props.index}.jpg`} />
              </figure>
              <div className='article-info'>
                <h4>{props.cityName}</h4>
                <span>From {props.price}$</span>
                <FaHeart className={isFavorite ? 'icon icon2' : 'icon icon2 none'} onClick={toggleFavorite} />
                <FaRegHeart className={isFavorite ? 'none' : 'icon'} onClick={toggleFavorite} />
              </div>
            </article>
          </section>
        </span>
      </span>
    </div>
  );
}
