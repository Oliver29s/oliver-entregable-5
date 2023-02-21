import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './pages/ProtectedRoute'
import Pokedes from './pages/Pokedes'

function App() {


 
  return (
    <div className="App">
         <h1>Pokedex</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='pokedes' element={<Pokedes/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
