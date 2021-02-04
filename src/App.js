import React from "react"
import './App.css';
import image1 from './images/jhapa.jpg'
import image2 from './images/kathmandu.jpg'
import image3 from './images/morang.jpg'
import image4 from './images/sunsari-city.jpeg'

import Game from "./components/game/Game"

function App(props) {
  const club = {
    name: 'Jhapa Club',
    logoSrc: image1
  }

  const union = {
    name: 'Kathmandu Union',
    logoSrc: image2
  }

  const  united = {
    name: 'Morang United',
    logoSrc: image3
  }

  const city = {
    name: 'Sunsari City',
    logoSrc: image4
  }

  return (
    <div className="App">
      <Game
        venue="Union"
        homeTeam={club}
        visitingTeam={union}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={united}
        visitingTeam={city}
      />
    </div>
  )
}

export default App;
