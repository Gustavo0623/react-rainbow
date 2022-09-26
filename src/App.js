import React, { useState } from 'react'
import ColorBlock from './Components/Colorblock'
import ColorForm from './Components/ColorForm'
import './App.css'

function App(){
    
    let [colors, setColors] = useState([
      'violet', 'blue',
      'lightblue', 'green',
      'greenyellow', 'yellow',
      'orange', 'red'
    ])

    const addColor = (newColor) => {
      setColors([colors, newColor])
    }

    let colorMap = colors.map((colors, i) => {
      return(
        <ColorBlock key={i} color={colors}/>
      )
    })
    
    return (
        <div className="App">
          {colorMap}
          <ColorForm addColor={addColor}/>
        </div>

    )
}


export default App;
