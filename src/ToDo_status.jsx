import ToDo_item from "./todo_item";

function TaskStatus({status,tasks_related,handleDel}){
    const x = status === "ToDo" ? "🎯" : status === "Doing" ? "🔥" : "✅";
return(
    <div className="flex-fill text-center">
    <h1>{status}{x}</h1>
    <ul style={{listStyleType:"none"}}>
    {tasks_related.map(ele=><ToDo_item key={ele.id} handleDel={handleDel} task={ele} />)}
        
    </ul>
    </div>
);
}
export default TaskStatus;