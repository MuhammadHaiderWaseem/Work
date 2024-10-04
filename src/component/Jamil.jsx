import React, { useState } from 'react'

const Jamil = () => {
  const [count,setCount]=useState();
  return (
    <div>
      <input type="text" placeholder='search' onClick={(e)=>setCount(e.target.value)}/>
      <h1>{count}</h1>
    </div>
  )
}

export default Jamil