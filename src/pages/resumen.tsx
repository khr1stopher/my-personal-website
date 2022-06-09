import React from 'react'
import { resumen } from '../services/files'

const Resumen = () => {
    return <div className="resumen">
        <iframe src={resumen} style={{ height: '100vh', width: '100%' }}></iframe>
    </div>
}

export default Resumen;