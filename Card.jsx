import React from 'react'

function Card({values,handleClick,index}) {
  const{name,image,profession,friends}=values;
  return (
<div className="w-70  bg-white rounded-md overflow-hidden">
  <div className="w-full h-40 bg-sky-100">
    <img className="w-full h-full object-cover"
     src={image}></img>
  </div>
  <div className="w-full p-3">
  <h3 className="text-xl font-semibold">{name}</h3>
  <h5 className="text-xs">{profession}</h5>
  <button onClick={()=>handleClick(index)}className="px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">{friends===true?
  "Friends" : "Add friends"}
  
  </button>
  </div>
</div>

  )
}

export default Card