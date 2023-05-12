import { useState } from "react";
import data from "./data";
import List from "./List";
function App(){
    const[detail,setDetail]=useState(data);
    
    return(
        <main className="container"> 
<h3>{detail.length} Birthdays today: </h3>
<List detail={detail} > </List>
<button onClick={()=>{setDetail([])}}> clear all</button>
        </main>
        
    )

}
export default App;