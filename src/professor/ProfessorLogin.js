import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api';
function ProfessorLogin() {
    const [professorLoginData, setProfessorLoginData]=useState({
        'professor_email':'',
        'professor_password':'',
    });


    const handleChange=(event)=>{
        setProfessorLoginData({
            ...professorLoginData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm=()=>{
        const professorFormData=new FormData();     
        professorFormData.append("professor_email", professorLoginData.professor_email)
        professorFormData.append("professor_password", professorLoginData.professor_password)
        

        try{
            axios.post(baseUrl+'/professor-login',professorFormData)
            .then((response)=>{
                if(response.data.bool==true){
                    localStorage.setItem('professorLoginStatus',true)
                    window.location.href='/professor-dashboard';
                }
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
        document.title='Professor Login'
    }, []);
    
    return (
        <div className="container mt-4">       
            <div className="row">
                <div className="col-4 offset-4">
                    <div className="card">
                        <h5 className="card-header p-3">Professor Login</h5>
                        <div className="card-body row align-items-center-start">                       
                            <form className="p-md-3">
                                <div className="form-floating mb-3">
                                    <input value={professorLoginData.professor_email} onChange={handleChange} type="email" className="form-control" name="professor_email" placeholder="name@example.com"/>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={professorLoginData.professor_password} onChange={handleChange} type="password" className="form-control" name="professor_password" placeholder="Password"/>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                    <input className="me-2 ms-1" type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button onClick={submitForm} className="w-100 btn btn-md btn-primary" type="submit">Log in</button>
                                                              
                            </form>                          
                        </div>                                               
                    </div>
                </div>
            </div>
        </div>

        
    )

}

export default ProfessorLogin;