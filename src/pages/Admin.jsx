import React from 'react'
import { useState } from 'react'
import Getpors  from '../components/getPors/Getpors'

function Admin() {
    const [data, setData] = useState([])
  return (
    <div>
        
      <Getpors setData={setData} data={data}/>
    </div>
  )
}

export default Admin