import './App.css';
import AddNewItem from "./components/AddNewItem";
function App() {

  return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        <div className="row">
          <AddNewItem />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Nhập từ khóa..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                      <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a href="#" role="button">
                        <span className="fa fa-sort-alpha-asc pr-5">
                          Tên A-Z
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" role="button">
                        <span className="fa fa-sort-alpha-desc pr-5">
                          Tên Z-A
                        </span>
                      </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" role="button">Trạng Thái Kích Hoạt</a></li>
                    <li><a href="#" role="button">Trạng Thái Ẩn</a></li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <tr>
                    <td>1</td>
                    <td>Học lập trình</td>
                    <td className="text-center">
                      <span className="label label-success">
                        Kích Hoạt
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
