import React from "react";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.hiddenTaskForm = this.hiddenTaskForm.bind(this)
        this.state = {
            toDo: '',
            todoStatus: 1
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddNewToDo = this.handleAddNewToDo.bind(this);
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc
                            <span className="fa fa-times-circle text-right" onClick={this.hiddenTaskForm}/>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input
                                    value={this.state.toDo }
                                    name="toDo"
                                    type="text"  className="form-control"

                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select value={this.state.todoStatus}
                                    name="todoStatus"
                                    className="form-control"
                                    required="required"
                                    onChange={this.handleInputChange}
                            >
                                <option value="1">Kích Hoạt</option>
                                <option value="0">Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>
                                &nbsp;
                                <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    hiddenTaskForm() {
        this.props.showTaskForm(false);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {

        this.props.onRecieveAddNewToDo(this.state)
        this.hiddenTaskForm()
        event.preventDefault();
    }

    handleAddNewToDo() {

    }
}

export default TaskForm;