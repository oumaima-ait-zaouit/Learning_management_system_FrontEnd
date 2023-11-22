import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api'
function Professor() {
  const [professor,setProfessor]=useState(null);
  useEffect(()=>{
    axios.get(baseUrl+'/professor/').then((response)=>{
      setProfessor(response.data)
    });
  }, []);



    return (

      <div className="container mt-4 py-5">   
        <h3 className="section-title mb-2 mt-8">Professors<a href="#" className="float-end"></a></h3>
        <div className="container mt-4" data-aos="fade-up">
          <div className="row">

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <div className="card" style={{ borderRadius: '15px', backgroundColor: '#bec7e8' }}>
                      <div className="card-body text-center">
                        <div className="mt-3">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                            className="rounded-circle img-fluid" style={{width: '150px'}} />
                        </div>
                        <h4 className="mb-2" style={{color:'#ffffff'}}>Mohamed Lchagar</h4>
                        <p className="mb-4" style={{color:'#ffffff'}}>Programmer<span className="mx-2">|</span> 
                        <Link to='/category-course-list' style={{color:'#ffffff'}}>Informatique</Link></p>
                        <div className="mb-4">
                          <button type="button" className="btn btn-primary btn-floating me-2">
                            <i className="bi bi-facebook"></i>
                          </button>
                          <button type="button" className="btn btn-primary btn-floating me-2">
                            <i className="bi bi-twitter"></i>
                          </button>
                          <button type="button" className="btn btn-primary btn-floating me-2">
                            <i className="bi bi-linkedin"></i>
                          </button>
                        </div>
                        <Link type="button" className="btn btn-primary btn-rounded btn-md" to='/professor-detail/1'>
                          See more
                        </Link>
                        <div className="d-flex justify-content-between text-center mt-5 mb-2">                           
                        </div>
                      </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="card" style={{ borderRadius: '15px', backgroundColor: '#bec7e8' }}>
                        <div className="card-body text-center">
                          <div className="mt-3">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                              className="rounded-circle img-fluid" style={{width: '150px'}} />
                          </div>
                          <h4 className="mb-2" style={{color:'#ffffff'}}>Mohamed Lchagar</h4>
                          <p className="mb-4" style={{color:'#ffffff'}}>Programmer<span className="mx-2">|</span> 
                          <Link to='/category-course-list' style={{color:'#ffffff'}}>Informatique</Link></p>
                          <div className="mb-4">
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-skype"></i>
                            </button>
                          </div>
                          <Link type="button" className="btn btn-primary btn-rounded btn-md" to='/professor-detail/1'>
                            See more
                          </Link>
                          <div className="d-flex justify-content-between text-center mt-5 mb-2">                           
                          </div>
                        </div>
                  </div>              
                </div>

                <div class="carousel-item">
                  <div className="card" style={{ borderRadius: '15px', backgroundColor: '#bec7e8' }}>
                        <div className="card-body text-center">
                          <div className="mt-3">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                              className="rounded-circle img-fluid" style={{width: '150px'}} />
                          </div>
                          <h4 className="mb-2" style={{color:'#ffffff'}}>Mohamed Lchagar</h4>
                          <p className="mb-4" style={{color:'#ffffff'}}>Programmer<span className="mx-2">|</span> 
                          <Link to='/category-course-list' style={{color:'#ffffff'}}>Informatique</Link></p>
                          <div className="mb-4">
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-skype"></i>
                            </button>
                          </div>
                          <Link type="button" className="btn btn-primary btn-rounded btn-md" to='/professor-detail/1'>
                            See more
                          </Link>
                          <div className="d-flex justify-content-between text-center mt-5 mb-2">                           
                          </div>
                        </div>
                  </div>              
                </div>

                <div class="carousel-item">
                  <div className="card" style={{ borderRadius: '15px', backgroundColor: '#bec7e8' }}>
                        <div className="card-body text-center">
                          <div className="mt-3">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                              className="rounded-circle img-fluid" style={{width: '150px'}} />
                          </div>
                          <h4 className="mb-2" style={{color:'#ffffff'}}>Mohamed Lchagar</h4>
                          <p className="mb-4" style={{color:'#ffffff'}}>Programmer<span className="mx-2">|</span> 
                          <Link to='/category-course-list' style={{color:'#ffffff'}}>Informatique</Link></p>
                          <div className="mb-4">
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-skype"></i>
                            </button>
                          </div>
                          <Link type="button" className="btn btn-primary btn-rounded btn-md" to='/professor-detail/1'>
                            See more
                          </Link>
                          <div className="d-flex justify-content-between text-center mt-5 mb-2">                           
                          </div>
                        </div>
                  </div>              
                </div>

                <div class="carousel-item">
                  <div className="card" style={{ borderRadius: '15px', backgroundColor: '#bec7e8' }}>
                        <div className="card-body text-center">
                          <div className="mt-3">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                              className="rounded-circle img-fluid" style={{width: '150px'}} />
                          </div>
                          <h4 className="mb-2" style={{color:'#ffffff'}}>Mohamed Lchagar</h4>
                          <p className="mb-4" style={{color:'#ffffff'}}>Programmer<span className="mx-2">|</span> 
                          <Link to='/category-course-list' style={{color:'#ffffff'}}>Informatique</Link></p>
                          <div className="mb-4">
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating me-2">
                              <i className="bi bi-skype"></i>
                            </button>
                          </div>
                          <Link type="button" className="btn btn-primary btn-rounded btn-md" to='/professor-detail/1'>
                            See more
                          </Link>
                          <div className="d-flex justify-content-between text-center mt-5 mb-2">                           
                          </div>
                        </div>
                  </div>              
                </div>

                


              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>                
          </div>
        </div>
      </div>


);
}

export default Professor;