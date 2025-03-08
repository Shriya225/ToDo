
function ToDo_item({task,handleDel}){
    console.log("...... Item being renderd...");
    
    return(
        <div className="border d-flex gap-5 justify-content-between p-3 m-3">
       <li><h3>{task.text} </h3></li>

       <button onClick={()=>handleDel(task.id)} className="btn btn-primary"><i class="fa-solid fa-trash"></i></button>
        </div>
    );
}
export default ToDo_item;