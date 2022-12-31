import React from 'react'
import image from "../assets/Zzz.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'
import resume from "../assets/resume.pdf"

function Index({hidden}) {

  return (
    <div className="container">
    <span className="circle-container">
    <span className='box'></span>
    </span>
    <div className="left">
      <div className="left">
      <p style={{fontSize:"22px"}}>Hello!</p>
      <p className='iam'>I'm Sabea</p >
      <p className='front'>Frontend developer</p>
      <div className='buttons'>
      <button onClick={()=>{location.href=resume}}>Download CV</button>
        <button style={{paddingInline:"15px"}} onClick={()=>{location.href='https://www.linkedin.com/in/mahmoud-sabea/'}}>
        <FontAwesomeIcon icon={faLinkedin}/>
        </button>
        <button style={{paddingInline:"13px"}} onClick={()=>{location.href='https://github.com/saab3'}}><FontAwesomeIcon icon={faGithub}/></button>
      </div>
      </div>
    </div>
    <div className="right">
      <img src={image} alt="Image" style={{width:"40vw",overflowY:"hidden"}} />
    </div>
  </div>
  )
}

export default Index