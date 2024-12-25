import LandingPage from "./Components/LandingPage"
import MainPage from "./Components/MainPage"
import { useState } from "react"
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const ToggleGamePlay = ()=>{
    setIsGameStarted(!isGameStarted)
  }
  return (
    <>
    {isGameStarted? <MainPage/>: <LandingPage toggle={ToggleGamePlay}/>}
    </>
  )
}

export default App
