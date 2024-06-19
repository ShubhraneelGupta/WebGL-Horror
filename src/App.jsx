import {useState} from 'react'
import Cubes from './components/Cubes/'


const App = () => {
  const [input, setInput] = useState("Heading")
  return (
    <Cubes/>
  )
}


export default App;