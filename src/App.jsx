import './App.css'
import Index from './components/index'
import Projects from './components/Projects'
import { useState } from 'react'

function App() {
  const [index, setIndex] = useState(true)
  return (
    <div className="App" >
      <div className="top-bar" style={{display:"flex",flexDirection:"row" , height:"3rem", justifyContent:"space-between",alignItems:"center"}}>
        <div className="title" onClick={()=>{setIndex(true)}} style={{color:"white",height:"100%",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",gap:"2px"}}>
          <p className='curly'>{'{'}</p><p>Mahmoud Sabea</p><p className='curly'>{'}'}</p>
        </div>
        <div className='nav' style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
          {['Projects'].map((ele,i)=>{
          return <a key={i} onClick={()=>{setIndex(false)}}>{ele}</a>
        })}
        </div>
      </div>
      {index?<Index />:<Projects />}
    </div>
  )
}

export default App
