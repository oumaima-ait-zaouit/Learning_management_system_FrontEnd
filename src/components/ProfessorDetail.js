import { Link } from "react-router-dom";


function ProfessorDetail () {
    
    return (
        <div className="container">
            <div className="container container-fluid row">
                <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                    <div className="card mb-4">
                                        <div className="card-body text-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="professor image"
                                            className="rounded-circle img-fluid" style={{width: '150px'}}/>
                                            <h5 className="my-3">John Smith</h5>
                                            <p className="text-muted mb-1">Full Stack Developer</p>
                                            <p className="text-muted mb-4">Departement</p>
                                            
                                        </div>
                                    </div>                                 
                            </div>

                            <div className="col-lg-8" >
                                <div className="card mb-4" >
                                    <div className="card-body">
                                        <div className="row">
                                            
                                            <div className="col-12">
                                                <p className="text-muted mb-0">In this corrected version, I've fixed the typos, and the progress bar should now be displayed correctly within the table row. Remember to adjust the content and styles according to your specific needs. In this corrected version, I've fixed the typos, and the progress bar should now be displayed correctly within the table row. Remember to adjust the content and styles according to your specific needs</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row mb-4">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">example@example.com</p>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        <div className="row mb-5">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(098) 765-4321</p>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <button type="button" className="btn btn-primary btn-sm me-2"><i className="bi bi-linkedin me-2"></i>LinkedIn</button>
                                                <button type="button" className="btn btn-primary btn-sm me-2"><i className="bi bi-twitter me-2"></i>Twitter</button>
                                                <button type="button" className="btn btn-primary btn-sm me-2"><i className="bi bi-facebook me-2"></i>Facebook</button>
                                                <button type="button" className="btn btn-primary btn-sm me-2"><i className="bi bi-instagram me-2"></i>Instagram</button>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>                                                              
                            </div>

                            <div className="col-lg-12">
                                <div className="card">
                                    <h5 className="card-header">Courses</h5>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Courses</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Level</th>
                                                        <th scope="col">Duration</th>
                                                        <th scope="col">Visited</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">1</th>
                                                        <td><Link to="/course-detail/1">Java Hibernet</Link></td>
                                                        <td>Programming</td>
                                                        <td>Advanced</td>
                                                        <td>1H 30 min</td>
                                                        <td>210</td> 
                                                        
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">2</th>
                                                        <td><Link to="/detail/:course_id">Photoshop</Link></td>
                                                        <td>Design</td>
                                                        <td>Intermidaire</td>
                                                        <td>8H</td>
                                                        <td>155</td> 
                                                        
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div> 

                            
                            </div>
                                </div>
                            </div>
                        </div>
                </div>        
            </div>
        </div>   
                        





                
        
              
    );
   
}
export default ProfessorDetail;