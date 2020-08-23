import React from 'react';
import Task from './Task';

const TaskList = (props: any) => {
    const traverseTodoList = props.todoList.map((task: any)=>{
        if(task.length !== 0) {
            return (<Task key={task.id} id={task.id} name={task.name} onTaskComplete={props.onTaskComplete} />)
        }
        return undefined;
    })

    return(
        <section className="task_list" id="task_list">
            {traverseTodoList}
        </section>
    );
}

export default TaskList;