import React from 'react'
import Image from '../Image/logo.svg';
export default function Logo() {
    return (
        <div>
            <img src={Image} alt="logo" style={{height:"10%", width:"10%",display:"flex", justifyContent:"flex-start", margin:"1rem"}}/>
        </div>
    )
}
