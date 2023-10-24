import './styless/App.css'
import { Route, Routes } from 'react-router-dom'
import Detail from "./routes/Detail"
import Home from './routes/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
