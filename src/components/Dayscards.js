import React from 'react'

function Dayscards(props) {
  return (
    <>
      <div className="card px-3 py-1 flex-shrink-0 d-flex flex-column my-2">
            <div className="d-flex justify-content-between px-0">
                <h6>{props.dataa.datetime}</h6>
            </div>
            <div className="d-flex justify-content-between">
                <h4 className="mt-2">{((props.dataa.temp - 32) / 1.8).toString().slice(0,5)}<sup>°c</sup></h4>
                <img src={`icons/${props.dataa.icon}.png`} alt='' style={{height:"45px"}}/>
            </div>
                <h5>{props.dataa.conditions}</h5>
                <h6 className="">Wind : {props.dataa.windspeed}km/h</h6>
                <h6 className="">Precipition : {props.dataa.precip}%</h6>
                <h6 className="">Humidity : {props.dataa.humidity}%</h6>
        </div>
</>        
  )
}

export default Dayscards