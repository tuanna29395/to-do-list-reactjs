import React from "react";

class TaskList extends React.Component {
    constructor(props) {
        console.log(JSON.parse(localStorage.getItem("todoTasks")))
        super(props);
    }


    render() {
        var todoClass  = (todo)=>{
            var a = 'lable'
             if(todo.status === 0){
                 return a + ' label-success'
            }  else{
                 return  a + ' label-danger'
             }
        }

        let todoElm = JSON.parse(localStorage.getItem("todoTasks")).map((todo, index) =>
            <tr key={index}>
                <td>{ index + 1}</td>
                <td>{todo['toDo']}</td>
                <td className="text-center">
                            <span className = {todoClass(todo)} >
                            {todo.status === 0 ? 'Kích Hoạt': 'Ẩn'}
                            </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control"/>
                            </td>
                            <td>
                                <select className="form-control">
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {todoElm}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;