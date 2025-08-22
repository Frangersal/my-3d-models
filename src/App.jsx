import { useState } from 'react'
// En tu App.jsx o en main.jsx
import '@google/model-viewer';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My 3d Models</h1>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>

      <model-viewer 
      alt="Link" 
      src="link_the_legend_of_zelda_-_nes.glb" 
      camera-controls 
      auto-rotate
      style={{ width: "600px", height: "600px" }}
      ></model-viewer>
    </>
  )
}

export default App
