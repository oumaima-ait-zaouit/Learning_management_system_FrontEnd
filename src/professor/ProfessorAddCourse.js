import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";
import { useEffect, useState } from "react";
import axios from "axios";


const baseUrl = 'http://127.0.0.1:8000/api';
function ProfessorAddCourse() {
    const [categories, setCategories] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + '/category/')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });

        axios.get(baseUrl + '/quiz/')
            .then((response) => {
                setQuizzes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching quizzes:", error);
            });

        axios.get(baseUrl + '/asset/')
            .then((response) => {
                setAssets(response.data);
            })
            .catch((error) => {
                console.error("Error fetching assets:", error);
            });

    }, []);


    useEffect(() => {
        document.title = 'Add course'
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <ProfessorSideBar />

                </aside>
                <section className="col-md-9">

                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body mt-3">
                            <div className="mb-3 row">
                                <label for="course-img" className="col-sm-2 col-form-label">Image :</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="course-img" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="course-title" className="col-sm-2 col-form-label">Course Title :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="course-title" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="course-description" className="col-sm-2 col-form-label">Description :</label>
                                <div className="col-sm-10">
                                    <textarea type="text" className="form-control" id="course-description" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="course-description" className="col-sm-2 col-form-label">Details :</label>
                                <div className="col-sm-10">
                                    <textarea type="text" className="form-control" id="course-description" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="category" className="col-sm-2 col-form-label">Category :</label>
                                <div className="col-sm-10">
                                    <select className="form-select" name="category">
                                        {categories.map((category, index) => { return <option key={index} > {category.category_title}</option> })}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="departement" className="col-sm-2 col-form-label">Level :</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Beginner</option>
                                        <option value="1">Intermediate</option>
                                        <option value="2">Advanced</option>
                                    </select>
                                </div>
                            </div>



                            <div className="mt-5 mb-3 row">
                                <hr />
                                <h5>Course Lesson</h5>
                            </div>
                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Lesson Title :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="lesson-title" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="pdp" className="col-sm-2 col-form-label">Upload lesson :</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="upload-course" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Duration :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="duration-course" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>
                                <button className="btn" style={{ backgroundColor: '#78c2aa', color: 'white' }}><i className="bi bi-plus"></i></button>
                            </div>


                            <div>
                                <div className="card">
                                    <h5 className="card-header">Lessons List</h5>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Tile</th>
                                                        <th scope="col">Lesson Uploaded</th>
                                                        <th scope="col">Duration</th>
                                                        <th scope="col">Action</th>


                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Introduction</td>
                                                        <td>Video.mp4</td>
                                                        <td>1H 30 min</td>
                                                        <td>
                                                            <button className="btn btn-danger btn-sm active">Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-4 mb-3 row">
                                <hr />
                                <h5>Course Asset</h5>
                            </div>
                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Asset Title :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="asset-title" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="pdp" className="col-sm-2 col-form-label">Upload asset :</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="upload-asset" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>
                                <button className="btn mb-2" style={{ backgroundColor: '#78c2aa', color: 'white' }}><i className="bi bi-plus"></i></button>
                            </div>

                            <div>
                                <div className="card">
                                    <h5 className="card-header">Assets List</h5>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Tile</th>
                                                        <th scope="col">Assets Uploaded</th>
                                                        <th scope="col">Action</th>



                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {assets.map((asset, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{asset.asset_title}</td>
                                                            <td>{asset.asset_uploaded}</td>
                                                            <td>
                                                                <button className="btn btn-danger btn-sm active">Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-3 row">
                                <hr />
                                <h5>Course Quiz</h5>
                            </div>
                            <div className="mb-5 row">
                                <label for="quiz" className="col-sm-2 col-form-label">Quiz :</label>
                                <div className="col-sm-10">
                                    <select className="form-select" name="quiz">
                                        {quizzes.map((quiz, index) => { return <option key={index} > {quiz.quiz_name}</option> })}
                                    </select>
                                </div>
                            </div>





                            <div className="mb-3 ">
                                <hr />
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>
                                <button className="btn col-10 mt-3" style={{ backgroundColor: '#78c2aa', color: 'white' }}>Add Course</button>
                            </div>





                        </div>
                    </div>

                </section>



            </div>
        </div>

    );
}

export default ProfessorAddCourse;