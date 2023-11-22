import { Link } from "react-router-dom";
import StudentSideBar from "./StudentSideBar";


function StudentMyCourses () {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                    <StudentSideBar />                   
                </aside>
                <section className="col-md-9">                   
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Courses</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Progress</th>                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                            <td><Link to="/detail/:course_id">Java Hibernet</Link></td>
                                            <td>Programming</td>
                                            <td>Advanced</td>                                           
                                            <td>                                               
                                                <button className="btn btn-danger btn-sm active">Delete</button>                                                        
                                            </td>
                                            <td>Finished</td>                                          
                                        </tr>                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                       
                </section>               
            </div>
        </div>                    
    );
}

export default StudentMyCourses;