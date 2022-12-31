import React from 'react'
import image from "../assets/Zzz.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'
import resume from "../assets/resume.pdf"
import {motion} from "framer-motion"

function Index({hidden}) {

  return (
    <div className="container">
    <motion.span animate={{x:[-450,0]}} transition={{motion:"linear" ,duration: 1}} className="circle-container">
    <span className='box'></span>
    </motion.span>
    <div className="left">
      <div className="left">
      <motion.p animate={{x:[-300,0]}} transition={{motion:"linear" ,duration: .5}} style={{fontSize:"22px"}}>Hello!</motion.p>
      <motion.p animate={{x:[-450,0]}} transition={{motion:"linear" ,duration: .75}} className='iam'>I'm Sabea</motion.p >
      <motion.p animate={{x:[-450,0]}} transition={{motion:"linear" ,duration: 1}} className='front'>Frontend developer</motion.p>
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