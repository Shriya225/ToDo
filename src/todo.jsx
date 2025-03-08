import { useCallback, useState } from "react";
import Todo_list from "./todo_list";
function ToDo(){
    const [tasks,setTasks]=useState([]);
    const [input,setInput]=useState("");
    console.log("parent being renderd...");
    console.log(Date.now());
    

    const AddTasks=useCallback(()=>{
      setTasks(prev => [...prev,input]);
      setInput("");
    },[input]);

    
    return(
        <div style={{border:"2px solid red"}}>
        <h1>Get Things Done.....</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={AddTasks}>Add</button>
       
        {tasks.map((e) => {console.log(e);
        })}
        
        <p>the input u eneerd is...{input}</p>
        <h1>input : {input}</h1>
        <Todo_list tasks={tasks} />
        </div>
    );


}
export default ToDo;