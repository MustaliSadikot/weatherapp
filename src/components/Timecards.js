import React from 'react'

function Timecards(props) {
  return (
    <>
        <div className="card px-3 py-1 flex-shrink-0 justify-content-center align-items-center d-flex flex-column" style={{pointerEvents:"none"}}>
                <h6>{props.data.datetime.slice(0,2)}</h6>
                <img src={`icons/${props.data.icon}.png`} alt='' style={{height:"25px"}}/>
                <h6 className='mt-1'>{ props.view == "temp" && ((props.data.temp - 32) / 1.8).toString().slice(0,2)}{props.view=="temp"&&<sup>°c</sup>}
                {props.view == "wind" && props.data.windspeed + " km/h"}
                {props.view == "preci" && props.data.precip + "%"}
                {props.view == "humidity" && props.data.humidity + "%"}
                </h6>
        </div>
    </>
  )
}

export default Timecards