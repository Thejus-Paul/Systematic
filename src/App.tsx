import React, {Component} from 'react';
import TaskList from './TaskList';
import ButtonList from './ButtonList';
import './App.css';

interface State {
  taskID: number,
  taskName: string,
  hasTaskCompleted: boolean,
  todoList: Array<object>
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      taskID: 1,
      taskName: '',
      hasTaskCompleted: false,
      todoList: []
    }
    
    this.openModalBox = this.openModalBox.bind(this)
    this.closeModalBox = this.closeModalBox.bind(this)
    this.insertTask = this.insertTask.bind(this)
    this.getTaskName = this.getTaskName.bind(this)
    this.onTaskDelete = this.onTaskDelete.bind(this)
  }
  openModalBox = () => {
    const ADD_TASK = document.getElementById("add_task")
    const OVERLAY = document.getElementById("overlay")
    const TASK_NAME = document.getElementById("task_name")
    if(ADD_TASK) ADD_TASK.classList.toggle("closed")
    if(OVERLAY) OVERLAY.classList.toggle("closed")
    if(TASK_NAME) TASK_NAME.focus()
  }
  closeModalBox = () => {
    const ADD_TASK = document.getElementById("add_task")
    const OVERLAY = document.getElementById("overlay")
    if(ADD_TASK) ADD_TASK.classList.toggle("closed")
    if(OVERLAY) OVERLAY.classList.toggle("closed")
  }
  insertTask = () => {
    if(this.state.taskName !== "") {
      let task: object = {
        id: this.state.taskID,
        name: this.state.taskName,
        completed: this.state.hasTaskCompleted
      }
      let currentTodoList: Array<object> = this.state.todoList
      currentTodoList.push(task)
      this.setState({
        taskID: this.state.taskID + 1,
        taskName: '',
        todoList: currentTodoList
      });
    }
    this.closeModalBox()
  }
  getTaskName = (e:{target: HTMLInputElement}) => {
    this.setState({taskName: e.target.value}) 
    e.target.value = ''
  }
  onTaskDelete = (ID: number) => {
    let updatedTodoList = this.state.todoList.filter((todo: any) => {
        if( todo.id !== ID) return todo
        else return null
    })
    this.setState({ todoList : updatedTodoList })
  }
  render() {
    return (
      <div className="App">
        <main>
          <header>
              <span className="title">5y5t3m4t:c</span>
          </header>
          <TaskList todoList={this.state.todoList} onTaskDelete={this.onTaskDelete}/>
          <ButtonList openModalBox={this.openModalBox} />
        </main>
        <section className="add_task closed" id="add_task">
          <span id="close" onClick={this.closeModalBox}>&#xd7;</span><br/>
          <div className="wrapper">
            <label>Name:</label>
            <input type="text" id="task_name" onBlur={this.getTaskName}/> 
          </div>
          <input className="btn btn__add" onClick={this.insertTask} type="submit" value="OK" />
        </section>
        <section className="overlay closed" id="overlay"></section>
      </div>
    ); 
  }
}


export default App;
