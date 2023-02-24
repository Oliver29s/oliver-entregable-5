import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './pages/ProtectedRoute'
import Pokedes from './pages/Pokedes'
import hidden from './store/slices/hidden'
import PokeInfo from './pages/PokeInfo'

function App() {

console.log(hidden)
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/pokedes' element={<Pokedes/>}/>
          <Route path='/pokedes/:id' element={<PokeInfo/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
