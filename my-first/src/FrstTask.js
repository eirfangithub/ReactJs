import React, { useState ,useEffect } from 'react';



const FrstTask = () => { 

    const [tasks , setTask] = useState([]);

    useEffect(() => {
        const tasks = [
            {
                title:'First Task',
                status:'Done',
            },
            {
                title:'Second Task',
                status:'Pending',
            }
        ];
         setTask(tasks);
        /* return () => {
          second
        } */
      }, [])

      const [title,setTitle] = useState("");
    
    const addTask = () => {
        
        if(title.length === 0){ alert('Please get out of my way Bitch');}
       
        
        const taskItem = {
            title,
            status:'Pending'
        }
        const updatedTask = tasks.slice();
         updatedTask.unshift(taskItem)
        setTask(updatedTask);

        setTitle("");

    }

    const deleteTask = () =>{
        const deletedTask = tasks.splice(-1,1); //splice(-1)
        setTask(deletedTask);
    }

    return(
        <div>
            <div>s
                <input placeholder='Enter your shit' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={deleteTask}>Delete</button>
                <button onClick={addTask}>Add</button>
            </div>
            {
                tasks.map( (t) =>(
                    <div>
                        {t.title}
                        
                    </div>

                ))

            }

        </div>
    ) 

}

export default FrstTask;

