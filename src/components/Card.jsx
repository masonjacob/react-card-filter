import React from 'react'
import {motion} from 'framer-motion';
const Card = ({card}) => {

  return (
    <motion.div layout 
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
        <h1>{card.name}</h1>
        <img className="card-image" src={require(`../assets/img/${card.src}/image.jpg`)} alt=""/>
    </motion.div>
  )
}

export default Card