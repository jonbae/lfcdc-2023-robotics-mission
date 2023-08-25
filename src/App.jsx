import { useState } from 'react'

import './App.css'

function App() {
  
  const [totalPoints, setTotalPoints]  = useState(0); 
  const missionStates = [
    {title: "mission 1", description: "this is the first mission", counter: 0}, 
    {title: "mission 2", description: "this is the first mission", counter: 0}, 
    {title: "mission 3", description: "this is the first mission", counter: 0}, 
    {title: "mission 4", description: "this is the first mission", counter: 0}, 
    {title: "mission 5", description: "this is the first mission", counter: 0}, 
    {title: "FINAL MISSION", description: "this is the first mission", counter: 0},  
  ]

  const renderMissions = () => {
    return missionStates.map( ( missionState, index) => <div className='font-bold underline' key={index}>
      <p>{missionState.title}</p>
      <p>{missionState.description}</p>
      <p>{missionState.counter}</p>
        {/* max point limit  */}
    </div>)
  }
  
  return (
    <main>
      <div>
        {totalPoints}


        {renderMissions()}
      </div>
    </main>
  )
}

export default App
