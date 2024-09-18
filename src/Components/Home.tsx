import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <div>
        <div className='card'>
          <h1>FAQ_Component</h1>
          <button onClick={()=>{navigate("/faq")}}>Go</button>
        </div>
      </div>
    </div>
  )
}

export default Home