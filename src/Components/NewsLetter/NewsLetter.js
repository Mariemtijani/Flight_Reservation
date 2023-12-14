import React from 'react'

// imported image
import newsLetter from '../../assests/Images/newsLetter.png'

function NewsLetter() {
  return (
    <div className='container section newsLetterContainer flex'>
      <div className="newsImageDiv">
        <img src={newsLetter} alt="" />
      </div>
      <div className='newsInputDiv'>
        <h4>Receive our newsletter.</h4>
        <p>Sign up for email updates with travel recommendations and Private Deals.</p>
        <input type="email" name="" id="" placeholder='Your email ..' />
      </div>

      <div className="newsBtn">
        <button type="button" className='btn'>Let's do this</button>
      </div>
    </div>
  )
}

export default NewsLetter
