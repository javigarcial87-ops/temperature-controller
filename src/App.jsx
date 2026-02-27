import React from "react"
import { useState } from "react"
import TemperatureDisplay from "./components/TemperatureDisplay"
import TemperatureControls from "./components/TemperatureControls"
import HistoryList from "./components/HistoryList"



export default function App() {
  const [temperature, setTemperature] = useState(20)
  const [history, setHistory] = useState([])

  const addToHistory = (temp) =>{
    const time = new Date().toLocaleTimeString()
    setHistory([...history,`[${time}] -> ${temp} ºC`])
  }

  const increaseTemperature = () =>{
    const newTemp = temperature + 1
    setTemperature(newTemp)
    addToHistory(newTemp)
  }

  const decreaseTemperature = () =>{
    const newTemp = temperature - 1
    setTemperature(newTemp)
    addToHistory(newTemp)
  }

  const resetTemperature = () => {
    setTemperature(20)
    setHistory([])
  }

  return (
    <div>
      <TemperatureDisplay temperature={temperature}/>
      <TemperatureControls
      onIncrease={increaseTemperature}
      onDecrease={decreaseTemperature}
      onReset={resetTemperature}
      />
      <HistoryList history={history}/>
    </div>
  )
}

