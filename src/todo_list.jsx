import ToDO_item from "./todo_item";
import { memo } from "react";

const Todo_list=memo(({tasks})=>{
    console.log("List being renderd...");
    
    return(
        <div style={{border:"2px solid blue"}}>
        <h1>ToDO tasks</h1>
        <ToDO_item tasks={tasks}/>
        </div>
    );
});
export default Todo_list;
