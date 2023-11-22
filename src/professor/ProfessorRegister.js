import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api/professor/';
function ProfessorRegister() {
    const [professorData, setProfessorData]=useState({
        'professor_name':'',
        'professor_email':'',
        'professor_password':'',
        'professor_phone_number':'',
        'professor_speciality':'',
        'professor_department':'',
        'status':'',
    });
    const handleChange=(event)=>{
        setProfessorData({
            ...professorData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm=()=>{
        const professorFormData=new FormData();
        professorFormData.append("professor_name", professorData.professor_name)
        professorFormData.append("professor_email", professorData.professor_email)
        professorFormData.append("professor_password", professorData.professor_password)
        professorFormData.append("professor_phone_number", professorData.professor_phone_number)
        professorFormData.append("professor_speciality", professorData.professor_speciality)
        professorFormData.append("professor_department", professorData.professor_department)

        try{
            axios.post(baseUrl,professorFormData).then((response)=>{
                console.log(response.data);
            });

        }catch(error){
            console.log(error);

        }
    };

    const professorLoginStatus=localStorage.getItem('professorLoginStatus')
    if(professorLoginStatus=='true'){
        window.location.href='/professor-dashboard';
    }

    useEffect(()=>{
        document.title='Professor Register'
    }, []);
    
    return (
        <div className="container mt-4">       
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h5 className="card-header p-3">Professor Register</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input value={professorData.professor_name} onChange={handleChange} name="professor_name" type="text" className="form-control"  placeholder="alex"/>
                                <label for="professor_name">Full name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={professorData.professor_email} onChange={handleChange} name="professor_email" type="email" className="form-control"  placeholder="name@example.com"/>
                                <label for="professor_email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={professorData.professor_password} onChange={handleChange} name="professor_password" type="password" className="form-control"  placeholder="Password"/>
                                <label for="professor_password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={professorData.professor_phone_number} onChange={handleChange} name="professor_phone_number" type="number" className="form-control"  placeholder=""/>
                                <label for="professor_phone_number">Phone number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={professorData.professor_speciality} onChange={handleChange} name="professor_speciality" type="text" className="form-control"  placeholder=""/>
                                <label for="professor_speciality">Speciality</label>
                            </div>

                            <div className="form mb-3">
                                <select value={professorData.professor_department} onChange={handleChange} name="professor_department" className="form-select" aria-label="Default select example" >
                                    <option selected>Departement</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                           
                            <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorRegister;