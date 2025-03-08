import { useCallback, useEffect, useState } from "react";
import Todo_list from "./todo_list";
import "bootstrap/dist/css/bootstrap.min.css";

const oldTasks=localStorage.getItem("tasks");
console.log(oldTasks);

function ToDo(){
    const [tasks,setTasks]=useState(JSON.parse(oldTasks) || []);
    const [input,setInput]=useState("");
    const [select,SetSelect]=useState("ToDo");


    useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
    

    const AddTasks=useCallback(()=>{
      if (input===""){
        alert("plaese enter a task");
        return;
      }
      setTasks(prev => [...prev,{id:Date.now(),text:input,status:select}]);
      setInput("");
      SetSelect("ToDo");
    },[input,select]);

    const DeleteTask=(todoId)=>{
      setTasks(prev => prev.filter(ele => ele.id!== todoId));
    }
    const SelectOpt=(e)=>{
      SetSelect(e.target.value);
   
    }

    
    return(
      <div >
          <h1 className="text-center m-4">Get Things Done.....</h1>
          <div className="d-flex flex-column flex-sm-row gap-3 border p-3 justify-content-center m-3">
        <input className="w-sm-25" type="text" placeholder={"Enter your Task....."} value={input} onChange={(e)=>setInput(e.target.value)} />
        <select value={select} onChange={SelectOpt}  >
          <option value="ToDo">ToDo</option>
          <option value="Doing">Doing</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={AddTasks} className="btn btn-primary w-10 ">Add</button>
          </div>
       
        {tasks.map((e) => {console.log(e);
        })}
        <Todo_list tasks={tasks} handleDel={DeleteTask}/>
        </div>
    );


}
export default ToDo;