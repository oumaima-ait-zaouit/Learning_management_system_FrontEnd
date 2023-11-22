import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";

function Users () {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                    <ProfessorSideBar />
                    
                </aside>

                <section className="col-md-9">
                    
                    <div className="card">
                        <h5 className="card-header">Users</h5>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Student</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Level</th>                                                                                                                         
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                            <td>Omaima Ait Zaouit</td>
                                            <td><Link to="/detail/1">Introduction to JavaScript</Link></td>
                                            <td>Beginer</td>                                          
                                            
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

export default Users;