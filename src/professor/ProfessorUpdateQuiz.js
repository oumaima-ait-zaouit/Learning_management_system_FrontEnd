import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";

function ProfessorUpdateQuiz () {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                    <ProfessorSideBar />
                    
                </aside>
                <section className="col-md-9">
                    
                <div className="card">
                        <h5 className="card-header">Update Quiz</h5>
                        <div className="card-body mt-3">
                            
                            <div className="mb-3 row">
                                <label for="course-title" className="col-sm-2 col-form-label">Quiz Title :</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="course-title"/>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="category" className="col-sm-2 col-form-label">Course :</label>
                                <div className="col-sm-10">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open to select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <label for="category" className="col-sm-2 col-form-label">Category :</label>
                                <div className="col-sm-10">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open to select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div> 
                             



                            <div className="mt-5 mb-3 row">
                                <hr/>
                                <h5>Quiz Questions</h5>                               
                            </div>                             
                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Question :</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="lesson-title"/>
                                </div>
                            </div>                           
                            <div className="mb-3 row">
                                <label for="pdp" className="col-sm-2 col-form-label">Choices :</label>
                                <div className="col-sm-3">
                                <input type="text" className="form-control mb-3" id="upload-course"/>
                                <input type="text" className="form-control mb-3" id="upload-course"/>
                                <input type="text" className="form-control mb-3" id="upload-course"/>
                                <input type="text" className="form-control mb-3" id="upload-course"/>
                                </div>                               
                            </div>
                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Correct Answer :</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="duration-course"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>
                                <button className="btn" style={{backgroundColor:'#78c2aa', color:'white'}}><i className="bi bi-plus"></i></button>
                            </div>

                            <div>
                                <div className="card">
                                    <h5 className="card-header">Questions List</h5>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Question</th>
                                                        <th scope="col">Choices</th>
                                                        <th scope="col">Correct Inswer</th>
                                                        <th scope="col">Action</th>

                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">1</th>                                                        
                                                        <td className="question" id="question">what is REST API ?</td>
                                                        <td className="choices" id="choices">
                                                            <li>1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                        </td>
                                                        <td className="correct_answer" id="correct_answer">2</td>                                                         
                                                        <td>
                                                            <button className="btn btn-danger btn-sm active" id="delete_btn">Delete</button>                                                        
                                                        </td>
                                                    </tr>                                                   
                                                </tbody>
                                            </table>
                                        </div>                           
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 ">
                                <hr/>
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>
                                <button className="btn col-10 mt-3" style={{backgroundColor:'#78c2aa', color:'white'}}>Update Quiz</button>    
                                                           
                            </div>  
                            <div className="mb-3 ">
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>                                 
                                <button className="btn btn-danger col-10 mt-3">Cancel</button>                             
                            </div> 

                    
                                                         
                                                   
                                
                       </div>
                    </div>
                    
                </section>

               
                
            </div>
        </div>                    

    );
}

export default ProfessorUpdateQuiz;