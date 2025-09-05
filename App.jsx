import React from 'react'
import Card from './components/Card';
import { useState } from 'react';
function App() {
const data=[
        {
          name:"mahak",
          profession:"painter",
          image:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
          friends:false
          
        },
        {
          name:"keshav",
          profession:"coder",
          image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
          friends:false

        },{
          name:"parnavi",
          profession:"intern",
          image:"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
                    friends:false

        },{
          name:"mayank",
          profession:"clgstu",
          image:"https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
                    friends:false

        }
      ];
const [realdata,setRealData]=useState(data);
const handlefriendsbutton=(cardindex)=>{
setRealData((previous)=>{
return previous.map((item,index)=>{
  if(index===cardindex){
    return {...item,friends:!item.friends}
  }
  return item;
})
});
}



  return (
<>
<div className="w-full h-screen bg-zinc-300 flex
gap-4 items-center justify-center">
{realdata.map((item,index)=>(
  <Card key={index} index={index} handleClick={handlefriendsbutton}values={item}/>
))}

</div>

</>
 

  );
}

export default App