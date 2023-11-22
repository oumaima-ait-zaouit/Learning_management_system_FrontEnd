import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";


function ProfessorProfile() {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                <ProfessorSideBar />                    
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Settings</h5>
                        <div className="card-body mt-3">
                            <div className="mb-3 row">
                                <label for="pdp" className="col-sm-2 col-form-label">Photo</label>
                                <div className="col-sm-10">
                                <input type="file" className="form-control" id="pdp"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Full Name</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="FulleName"/>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                <textarea type="text" className="form-control" id="FulleName"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="staticEmail"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="phone" className="col-sm-2 col-form-label">Mobile number</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="speciality" className="col-sm-2 col-form-label">Speciality</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="speciality"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="departement" className="col-sm-2 col-form-label">Departement</label>
                                <div className="col-sm-10">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>                           
                                <div className="mb-3 row">
                                    <label for="linkedin" className="col-sm-2 col-form-label">LinkedIn</label>
                                    <div className="col-sm-4">
                                    <input type="text" className="form-control" id="linkedin"/>
                                    </div>
                                    <label for="twitter" className="col-sm-2 col-form-label">Twitter</label>
                                    <div className="col-sm-4">
                                    <input type="text" className="form-control" id="twitter"/>
                                    </div>                                   
                                </div>                                                                                             
                                <div className="mb-3 row">
                                    <label for="facebook" className="col-sm-2 col-form-label">Facebook</label>
                                    <div className="col-sm-4">
                                    <input type="text" className="form-control" id="facebook"/>
                                    </div>
                                    <label for="instagram" className="col-sm-2 col-form-label">Instagram</label>
                                    <div className="col-sm-4">
                                    <input type="text" className="form-control" id="instagram"/>
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

export default ProfessorProfile;