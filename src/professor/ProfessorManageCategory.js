import { Link } from "react-router-dom";
import ProfessorSideBar from "./ProfessorSideBar";
import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = 'http://127.0.0.1:8000/api';
function ProfessorManageCategory() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(baseUrl + '/category/')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });

    }, []);
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <ProfessorSideBar />

                </aside>
                <section className="col-md-9">

                    <div className="card">
                        <h5 className="card-header">Add Categoty</h5>
                        <div className="card-body mt-3">

                            <div className="mb-3 row">
                                <label for="fullName" className="col-sm-2 col-form-label">Title :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="lesson-title" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="course-img" className="col-sm-2 col-form-label">Image :</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" name="category_image" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="addlesson" className="col-sm-2 col-form-label"></label>
                                <button className="btn" style={{ backgroundColor: '#78c2aa', color: 'white' }}><i className="bi bi-plus"></i></button>
                            </div>
                            <div>
                                <div className="card">
                                    <h5 className="card-header">Category List</h5>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Action</th>



                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {categories.map((category, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{category.category_title}</td>

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
                        </div>
                    </div>

                </section>



            </div>
        </div>

    );
}

export default ProfessorManageCategory;