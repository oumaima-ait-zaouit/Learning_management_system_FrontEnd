import { Link } from "react-router-dom";
function Courses() {
    return (
        <div className="container mt-4">
            <h3 className="pb-1 mb-4 mt-8">Courses <Link to='/category-course-list' className="float-end"><i className="bi bi-arrow-right"></i></Link></h3>
            <div className="row">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="bg1.jpg"
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }} />

                                <div className="card-body">
                                    <h5 className="card-title">Course Tile</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <Link type="button" className="btn btn-sm btn-outline-secondary" to='/course-detail/1'>View</Link>

                                        </div>
                                        <small className="text-muted">9 mins</small>
                                        <small className="text-muted">Advanced</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div className="card-body">
                                    <h5 className="card-title">Course Tile</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>

                                        </div>
                                        <small className="text-muted">9 mins</small>
                                        <small className="text-muted">Advanced</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>

                                        </div>
                                        <small className="text-muted">9 mins</small>
                                        <small className="text-muted">Hard</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-outline-secondary">View</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                        <small className="text-muted">Hard</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>

                                        </div>
                                        <small className="text-muted">9 mins</small>
                                        <small className="text-muted">Hard</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>

                                        </div>
                                        <small className="text-muted">9 mins</small>
                                        <small className="text-muted">Hard</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    );
}

export default Courses;