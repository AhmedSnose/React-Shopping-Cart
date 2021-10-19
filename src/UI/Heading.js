import React from 'react'
import Clasess from './Heading.module.css'
function Heading(props) {
    return (
        <h3 className={Clasess.heading}>
           {props.txt}
        </h3>
    )
}

export default Heading
