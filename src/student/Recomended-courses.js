import { Link } from "react-router-dom";
import SideBar from "./StudentSideBar";

function RecomendedCourses () {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />                   
                </aside>
                <section className="col-md-9">                   
                <div className="card">
                        <h5 className="card-header">Recomended Courses</h5>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Courses</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Level</th>                                                                                     
                                            <th scope="col">Professor</th>                                                                                   
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><Link to="/detail/:course_id">FrontEnd React</Link></td>
                                            <td>Programming</td>
                                            <td>Advanced</td>
                                            <td>Mohamed Lachgar</td>                                           
                                                                                                                                
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

export default RecomendedCourses;