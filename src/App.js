import './App.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskControl from "./components/TaskControl";
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoTasks: [],
            showTaskForm: true

        };
        this.actionShowTaskForm = this.actionShowTaskForm.bind(this)
        this.setHiddenTaskForm = this.setHiddenTaskForm.bind(this)
        this.actionAddNew = this.actionAddNew.bind(this)
    }

    componentWillMount() {
        localStorage.setItem('todoTasks',JSON.stringify([]))
        var task = JSON.parse(localStorage.getItem("todoTasks"))
        this.setState(task)
    }

    render() {

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    {this.state.showTaskForm === true && <TaskForm showTaskForm={this.setHiddenTaskForm} onRecieveAddNewToDo={this.actionAddNew}/>}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary"
                                onClick={this.actionShowTaskForm}>
                            <span className="fa fa-plus mr-5"/>Thêm Công Việc
                        </button>
                        <TaskControl/>
                        <TaskList toDoTask/>
                    </div>
                </div>
            </div>
        );
    }

    actionShowTaskForm() {
        this.setState({
            showTaskForm: !this.state.showTaskForm
        })
    }

    setHiddenTaskForm(param){
        this.setState({
            showTaskForm : param
        })
    }

    actionAddNew(todo){
        let newList = JSON.parse(localStorage.getItem("todoTasks")).push(todo);
        localStorage.setItem("todoTasks", JSON.stringify(newList))
        this.setState({
            todoTasks: newList
        })


    }
}


export default App;
