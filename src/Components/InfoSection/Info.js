import React from 'react'

// imported images
import info2 from '../../assests/Images/info2.jpg'

const Info = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="titlesDiv">
            <small>Why book with us ?</small>
            <h2>Plan your travel with confidence</h2>
            <p>Find helpwith booking and travel plane, 
                see what to respect along the journey
            </p>
        </div>

        <div className="infoDiv flex">
            <div className="textDiv grid">
                <div className="singleInfo">
                    <span className="number">01</span>
                    <h4>Cheap flight tickets</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio quaerat
                         quod non suscipit omnis obcaecati mollitia, dicta quam.
                        
                    </p>
                </div>

                <div className="singleInfo">
                    <span className="number colorOne">02</span>
                    <h4>We have experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio quaerat
                         quod non suscipit omnis obcaecati mollitia, dicta quam.
                        
                    </p>
                </div>

                <div className="singleInfo">
                    <span className="number colorTwo">03</span>
                    <h4>Online payment safety</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio quaerat
                         quod non suscipit omnis obcaecati mollitia, dicta quam.
                        
                    </p>
                </div>
            </div>

            <div className="imgDiv">
                <img src={info2} alt="" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Info
