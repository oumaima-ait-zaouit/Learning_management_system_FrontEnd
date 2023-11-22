import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function CourseDetail () {
    let {course_id}=useParams();
    return (

    <div className="container mt-3">       
        <div className="row">
            <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="course image" style={{ width: '450px', height: 'auto' }} />
            </div>
            <div className="col-8">
                <h2 className="title-course mb-4">Title course</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="list-group list-group-flush col-6">

                    <table className="table">
                                    <thead >
                                        <tr>
                                            
                                            <td className="fw-bold"><i className="bi bi-reception-4 me-3"></i>Level</td>
                                            <td>Intermedium</td>                                            
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            
                                            <td className="fw-bold"><i className="bi bi-clock-fill me-3"></i>Duration</td>
                                            <td>45 min</td>                                            
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            
                                            <td className="fw-bold"><i className="bi bi-x-diamond-fill me-3"></i>Category</td>
                                            <td>Design</td>                                            
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            
                                            <td className="fw-bold"><i className="bi bi-person-fill me-3"></i>Professor</td>
                                            <td><Link to='/professor-detail/1'>Imade</Link></td>                                            
                                        </tr>
                                    </thead>  
                                    <thead>
                                        <tr>
                                            
                                            <td className="fw-bold"><i className="bi bi-eye-fill me-3"></i>Visited</td>
                                            <td>163</td>                                            
                                        </tr>
                                    </thead>                                 
                    </table>
                </ul>
            </div>

        </div>

        <div className="row mt-5 justify-content-between">
            <div className=" col-8">
                <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x  mb-5 fs-6">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_4">Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">Lessons</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">Assets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_7">Quiz</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_8">Certificat</a>
                    </li>
                    
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="kt_tab_pane_4" role="tabpanel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Introduction</span>
                                <button className="btn btn-sm btn-primary">
                                    <i className="bi bi-play-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Set up project</span>
                                <button className="btn btn-sm btn-primary">
                                    <i className="bi bi-play-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Chapter 1</span>
                                <button className="btn btn-sm btn-primary">
                                    <i className="bi bi-play-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Chapter 2</span>
                                <button className="btn btn-sm btn-primary">
                                    <i className="bi bi-play-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Exercice</span>
                                <button className="btn btn-sm btn-primary">
                                    <i className="bi bi-play-fill"></i>
                                </button>
                            </li>

                        </ul>
                    </div>

                    <div className="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Introduction</span>
                                <button className="btn btn-sm btn-success">
                                    <i className="bi bi-file-text-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Set up project</span>
                                <button className="btn btn-sm btn-success">
                                    <i className="bi bi-file-text-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Chapter 1</span>
                                <button className="btn btn-sm btn-success">
                                    <i className="bi bi-file-text-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Chapter 2</span>
                                <button className="btn btn-sm btn-success">
                                    <i className="bi bi-file-text-fill"></i>
                                </button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Exercice</span>
                                <button className="btn btn-sm btn-success">
                                    <i className="bi bi-file-text-fill"></i>
                                </button>
                            </li>

                        </ul>
                    </div>

                    <div className="tab-pane fade" id="kt_tab_pane_7" role="tabpanel">
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className="tab-pane fade" id="kt_tab_pane_8" role="tabpanel">
                        <p>Dowload your certificate from here :</p>
                        <button type="button" class="btn btn-warning">Download</button>
                    </div>
                </div>
                

            </div>
            <div className="col-3">
                <div className="card">
                    <div className="card-header" style={{ backgroundColor: '#dcddfc'}}><h5>Do you have a question ?</h5></div>
                    <div className="card-body">
                
                        <ul className="list-group list-group-flush">
                        <div className="mb-3 row justify-content-between">
                                <div className="col-sm-12">
                                <input type="text" readonly className="form-control" id="staticEmail" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="mb-3 row justify-content-between">
                                <div className="col-sm-12">
                                <textarea type="text" className="form-control" id="inputText" placeholder="Message"/>
                                </div>                              
                            </div>
                            <button className="btn btn-primary col-sm-12">Send</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <h3 className="pb-1 mb-4 mt-4 py-5">Related Courses</h3>
          <div className="row">           
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="bg1.jpg" 
                            style={{                                
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                                }} />

                            <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <Link type="button" className="btn btn-sm btn-outline-secondary" to='/detail/1'>View</Link>
                                
                                </div>
                                <small className="text-muted">9 mins</small>
                                <small className="text-muted">Hard</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                
                                </div>
                                <small className="text-muted">9 mins</small>
                                <small className="text-muted">Hard</small>
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
export default CourseDetail;