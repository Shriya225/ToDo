import { memo } from "react";
import TaskStatus from "./ToDo_status";

const Todo_list=memo(({tasks,handleDel})=>{
    console.log("List being renderd...");
    const opts=["ToDo","Doing","Completed"];
    return(
        <div >
        <div className="d-flex flex-column flex-sm-row gap-4 mt-5">
            {opts.map(e=><TaskStatus status={e} tasks_related={tasks.filter(task=>task.status===e)} handleDel={handleDel}/>)}

        </div>
        </div>
    );
});
export default Todo_list;
