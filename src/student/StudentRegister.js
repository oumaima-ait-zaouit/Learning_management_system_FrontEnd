import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api/student/';
function StudentRegister() {
    const [studentData, setStudentData]=useState({
        'student_name':'',
        'student_email':'',
        'student_password':'',
        'student_phone_number':'',
        'student_interests':'',
        'status':'',
    });
    const handleChange=(event)=>{
        setStudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append("student_name", studentData.student_name)
        studentFormData.append("student_email", studentData.student_email)
        studentFormData.append("student_password", studentData.student_password)
        studentFormData.append("student_phone_number", studentData.student_phone_number)
        studentFormData.append("student_interests", studentData.student_interests)
        

        try{
            axios.post(baseUrl,studentFormData).then((response)=>{
                console.log(response.data);
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
        document.title='Student Register'
    });
    return (
        <div className="container mt-4">       
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h5 className="card-header p-3">User Register</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input value={studentData.student_name} onChange={handleChange} name="student_name" type="text" className="form-control" id="student_full_name" placeholder=""/>
                                <label for="student_full_name">Full name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={studentData.student_email} onChange={handleChange} name="student_email" type="email" className="form-control" id="student_email" placeholder="name@example.com"/>
                                <label for="student_email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={studentData.student_password} onChange={handleChange} name="student_password" type="password" className="form-control" id="student_password" placeholder="Password"/>
                                <label for="student_password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={studentData.student_phone_number} onChange={handleChange} name="student_phone_number" type="text" className="form-control" id="student_phone_number" placeholder=""/>
                                <label for="student_phone_number">Phone number</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea value={studentData.student_interests} onChange={handleChange} name="student_interests" type="text" className="form-control" id="student_interests" placeholder=""/>
                                <label for="student_interests">Interests</label>
                                <div id="student_interests_help" className="form-text">Php, Java, Design ..</div>
                            </div>
                           
                            <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StudentRegister;