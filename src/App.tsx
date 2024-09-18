import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Faq from './Components/Pages/FAQ_component/Faq'
function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/faq' element={<Faq/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App