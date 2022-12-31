import React from 'react'
import "./project.modules.css"


function Project({title,image,link}) {
  return (
    <div className='project' onClick={()=>{location.href=link}}>
        <div className="project-image" >
            <img src={image} className="thumbnail" style={{height:"100%",objectFit:"cover"}}/>
        </div>
        <div className="project-title">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Project