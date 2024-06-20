import {useState} from 'react'
import SPlane from './components/SPlane/'


const App = () => {
  const [input, setInput] = useState("Heading")
  return (
    <SPlane/>
  )
}


export default App;