import React from 'react'
import Project from './project'
import gameball from "../assets/gameball.png"
import myreads from "../assets/myreads.png"
import qrcode from "../assets/qrcode.png"
import wouldyourather from "../assets/wouldyourather.png"
import { motion } from "framer-motion"

function Projects() {
  return (
    <motion.div  animate={{ y: [500,0] }} transition={{   type: "spring",
    damping: 10,
    stiffness: 100 }} id="projects" > 

    <div  style={{display:"grid",height:"100%",justifyItems:"center",alignItems:"center",gap:"1rem",width:"100%", gridTemplateColumns:"repeat(auto-fit,minmax(20rem,1fr))"}}>
        {[{title:'Landing Page',image:gameball , link:"https://gameball-task.vercel.app/"},
        {title:'Book Shelf',image:myreads,link:"https://my-reads-reactjs.netlify.app/"},
        {title:"QR code Simple design",image:qrcode,link:"https://res-qr-card.netlify.app/"},
        {title:"Would you rather Social App",image:wouldyourather,link:"https://venerable-starburst-808531.netlify.app/"}].map((project)=>{
            return <Project title={project.title} image={project.image} link={project.link} />
        })}
    </div>
        </motion.div>
  )
}

export default Projects