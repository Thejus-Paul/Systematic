import React from 'react';
import Task from './Task';

interface props {
    todoList: Array<object>
}

const TaskList = (props: any) => {
    const traverseTodoList = props.todoList.map((task: any)=>{
        if(task.length !== 0) {
            return (<Task key={task.id} name={task.name} />)
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