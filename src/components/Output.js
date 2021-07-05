import React from 'react'
import './Output.css'
function Output({url, box}) {
// console.log(url, box)
const style = {
    top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol
}

    return (
        <div className="output-div center">
            <div className='absolute mt2' style={{position:"relative"}}>
            <img id="inputimage"  src={url} alt="" width='500px' heigh='auto' />
            <div className='bounding-box ' style={style}></div>  
            </div>
        </div>
    )
}

export default Output

