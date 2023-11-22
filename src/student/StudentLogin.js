import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const baseUrl='http://127.0.0.1:8000/api';
function StudentLogin() {
    const [studentLoginData, setStudentLoginData]=useState({
        'student_email':'',
        'student_password':'',
    });

    const handleChange=(event)=>{
        setStudentLoginData({
            ...studentLoginData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm=()=>{
        const studentFormData=new FormData();     
        studentFormData.append("student_email", studentLoginData.student_email)
        studentFormData.append("student_password", studentLoginData.student_password)
        

        try{
            axios.post(baseUrl+'/student-login',studentFormData)
            .then((response)=>{
                if(response.data.bool==true){
                    localStorage.setItem('studentLoginStatus',true)
                    window.location.href='/student-dashboard';
                }
            });

        }catch(error){
            console.log(error);

        }
    };

    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    if(studentLoginStatus=='true'){
        window.location.href='/student-dashboard';
    }

    
    useEffect(()=>{
        document.title='Student Login'
    }, []);

    return (
        <div className="container mt-4">       
            <div className="row">
                <div className="col-4 offset-4">
                    <div className="card">
                        <h5 className="card-header p-3" style={{backgroundColor: '#dadef0' }}>User Login</h5>
                        <div className="card-body row align-items-center-start">                       
                            <form className="p-md-3">
                                <div className="form-floating mb-3">
                                    <input value={studentLoginData.student_email} onChange={handleChange} name="student_email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={studentLoginData.student_password} onChange={handleChange} name="student_password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
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

export default StudentLogin;