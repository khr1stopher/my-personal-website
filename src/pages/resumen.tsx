import React from 'react'
import { resumen } from '../services/files'

const styleResumen = {
    Position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
}


const Resumen = () => {
    return <div className="resumen">
        <iframe src={resumen} style={styleResumen}></iframe>
    </div>
}

export default Resumen;