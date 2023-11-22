import { Link } from "react-router-dom";
import StudentSideBar from "./StudentSideBar";


function StudentProfile() {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                <StudentSideBar />                    
                </aside>

                <section className="col-md-9">
                <div className="card">
                        <h5 className="card-header">Profile Settings</h5>

                        <div className="card-body mt-3">
                        <div class="mb-3 row">
                                <label for="pdp" class="col-sm-2 col-form-label">Photo</label>
                                <div class="col-sm-10">
                                <input type="file" class="form-control" id="pdp"/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="fullName" class="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="FulleName"/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="staticEmail"/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="phone" class="col-sm-2 col-form-label">Mobile number</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="phone"/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="adresse" class="col-sm-2 col-form-label">Addresse</label>
                                <div class="col-sm-10">
                                <textarea type="text" class="form-control" id="adresse"/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="interest" class="col-sm-2 col-form-label">Interests</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="interest"/>
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

export default StudentProfile;