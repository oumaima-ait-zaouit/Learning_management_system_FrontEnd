import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api';
function ProfessorMyQuizes() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + '/quiz/')
            .then((response) => {
                setQuizzes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching quizzes:", error);
            });

    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3 mb-4">
                    <ProfessorSideBar />

                </aside>
                <section className="col-md-9">

                    <div className="card">
                        <h5 className="card-header">Quizes List</h5>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quizzes.map((quiz, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{quiz.quiz_name}</td>
                                                <td>{quiz.quiz_course}</td>
                                                <td>
                                                    <Link className="btn btn-success btn-sm active me-3" to='/professor-update-quiz'>Udpate</Link>
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

export default ProfessorMyQuizes;