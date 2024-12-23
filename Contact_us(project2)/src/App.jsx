import ContentHead from "./Components/ContentHead"
import FormContent from "./Components/FormContent"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div className="flex flex-col w-4/5 ml-auto mr-auto">
      <Navbar/>
      <ContentHead/>
      <FormContent/>
    </div>
  )
}

export default App
