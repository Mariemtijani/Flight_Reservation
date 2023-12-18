import React, { useState } from "react";
import "./Indicator.css";


export default function Indicator(props) {


  const [isDone, setIsDone] = useState('bloc-step')

 
  return (
    <div className="container-indicator">
      <div className="container-lines">

        <div className="first-line upper-line">

        </div>

        {/* selon formIndex le style changera */}
        <div 
        className="second-line upper-line"
        style={{
          width: props.formIndex === 1 ? "0%"
              : props.formIndex === 2 ? "50%"
              : props.formIndex === 3 ? "100%"
              : ""
        }}
        >

        </div>
      
      </div>

      <div className="container-step">
          <div className="bloc-step bloc-step2">
              <h6>1</h6>
          </div>
          <div className={props.formIndex >= 2 ? 'bloc-step bloc-step2' : 'bloc-step '}>
              <h6>2</h6>
          </div>
          <div className={props.formIndex >= 3 ? 'bloc-step bloc-step2' : 'bloc-step'}>
              <h6>3</h6>
          </div>
      </div>
    </div>
  );
}
