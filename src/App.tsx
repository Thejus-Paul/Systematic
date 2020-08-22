import React, {Component} from 'react';
import TaskList from './TaskList';
import ButtonList from './ButtonList';
import './App.css';

interface State {
  taskID: number,
  taskName: string,
  todoList: Array<object>
}

interface TaskList {
  todoList?: Array<object>
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      taskID: 1,
      taskName: '',
      todoList: []
    }
    this.openModalBox = this.openModalBox.bind(this)
    this.closeModalBox = this.closeModalBox.bind(this)
    this.getTaskName = this.getTaskName.bind(this)
    this.addTask = this.addTask.bind(this)
    this.completeTask = this.completeTask.bind(this)
  }
  openModalBox = () => {
    const addTaskBtn = document.getElementById("add_task");
    const overlay = document.getElementById("overlay");
    addTaskBtn?.classList.toggle("closed");
    overlay?.classList.toggle("closed");
  }
  closeModalBox = () => {
    const addTaskBtn = document.getElementById("add_task");
    const overlay = document.getElementById("overlay");
    let taskName = this.state.taskName;
    if(taskName !== "") {
      let task: object = {id: this.state.taskID, name: this.state.taskName}
      let currentTodoList: Array<object> = this.state.todoList;
      currentTodoList.push(task);
      this.setState({
        taskID: this.state.taskID+1,
        taskName: '',
        todoList: currentTodoList
      });
      console.log(this.state.todoList);
    }
    addTaskBtn?.classList.toggle("closed");
    overlay?.classList.toggle("closed");
  } 
  getTaskName = (e:{target: HTMLInputElement}) => {
    this.setState({taskName: e.target.value}) 
  }

  addTask = (name: string) => {

  }
  completeTask = (task:any) => {
    console.log(task)
  }
  render() {
    return (
      <div className="App">
        <main>
          <header>
              <span className="title">5y5t3m4t:c</span>
          </header>
          <TaskList todoList={this.state.todoList} />
          <ButtonList openModalBox={this.openModalBox} />
        </main>
        <section className="add_task closed" id="add_task">
          <div>
            <label>Name:</label>
            <input type="text" id="task_name" onChange={this.getTaskName}/> 
          </div>
          <input className="btn btn__add" onClick={this.closeModalBox} type="submit" value="OK" />
        </section>
        <section className="overlay closed" id="overlay"></section>
      </div>
    ); 
  }
}


export default App;