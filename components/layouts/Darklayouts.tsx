import React from 'react'
import {FC} from 'react'

export const Darklayouts:FC = ({children}) => {
  return (
    <div  style={{

backgroundColor:'rgba(0,0,0,0.3)',
padding:'10px',
borderRadius:'5px'


    } }>

<h3>dark-layout</h3>
 
 {children}
        

    </div>
  )
}
