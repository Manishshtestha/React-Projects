import LandingPage from "./Components/LandingPage"
import GamePlay from "./Components/GamePlay";
import { useState } from "react"
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const ToggleGamePlay = ()=>{
    setIsGameStarted(!isGameStarted)
  }
  return (
    <>
    {isGameStarted? <GamePlay/>: <LandingPage toggle={ToggleGamePlay}/>}
    </>
  )
}

export default App
