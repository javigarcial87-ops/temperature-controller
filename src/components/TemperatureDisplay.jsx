import React from "react"
function TemperatureDisplay({temperature}) {
    let message =""
    let color= ""

   if(temperature < 15) {
    message="frio"
    color="blue"
   } else if (temperature <=25) {
    message="se está bien"
    color="green"
   } else {
    message = "calor"
    color ="red"
   }

   return (
    <div style={{color}}>
        <h2>{temperature}ºC</h2>
        <p>{message}</p>

    </div>
   )
}



export default TemperatureDisplay