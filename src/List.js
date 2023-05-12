import { useState } from "react";
function List({detail}){
    const[store,setStore]=useState("");
return(
    <>
    {detail.map((person)=>{
       
        
return(
    
<div className="person" key={person.id}>
    <img src={person.image}  />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
               
            </div>
       
    </div>
)
    })}
  </>  
)
}
export default List;