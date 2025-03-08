
function ToDO_item({tasks}){
    console.log("...... Item being renderd...");
    
    return(
        <>
        <h1>hi item1</h1>
       {tasks.map((e)=>{console.log(e);
            return <p>task 1 is:{e}</p>;} 
        )}
        </>
    );
}
export default ToDO_item;