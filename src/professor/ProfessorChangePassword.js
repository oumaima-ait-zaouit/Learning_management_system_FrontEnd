import { Link } from "react-router-dom";

import ProfessorSideBar from "./ProfessorSideBar";


function ProfessorChangePassword() {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                <ProfessorSideBar />
                    

                </aside>

                <section className="col-md-9">
                <div className="card">
                        <h5 className="card-header">Change Password</h5>
                        <div className="card-body mt-3">
                            <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Old password</label>
                                    <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword"/>
                                    </div>
                                </div>
                                
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">New password</label>
                                    <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword"/>
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Confirm password</label>
                                    <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword"/>
                                    </div>
                                </div>
                                
                                <button className="btn btn-primary">Update</button>
                       </div>
                            
                        
                    </div> 
                </section>
            

               
                
            </div>
        </div>
            

        
    )

}

export default ProfessorChangePassword;