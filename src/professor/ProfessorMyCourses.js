import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";
import { useEffect, useState } from "react";
import axios from "axios";


const baseUrl = 'http://127.0.0.1:8000/api';
function ProfessorMyCourses() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios.get(baseUrl + '/course/')
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
            });

    }, []);

    useEffect(() => {
        document.title = 'Courses List'
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3 mb-4">
                    <ProfessorSideBar />

                </aside>
                <section className="col-md-9">

                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
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
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses.map((course, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td><Link to="/course-detail/1">{course.course_title}</Link></td>
                                            <td>{course.course_category}</td>
                                            <td>{course.course_level}</td>
                                            <td>{course.course_duration}</td>
                                            <td>210</td>
                                            <td>
                                                <Link className="btn btn-success btn-sm active me-3" to='/professor-update-course'>Udpate</Link>
                                                <button className="btn btn-danger btn-sm active">Delete</button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>

                </section>



            </div>
        </div>

    );
}

export default ProfessorMyCourses;