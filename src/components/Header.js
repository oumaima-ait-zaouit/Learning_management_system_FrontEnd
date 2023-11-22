import { Link } from "react-router-dom";

function Header() {
  const professorLoginStatus=localStorage.getItem('professorLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    return (
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img src="ds_logo1.jpeg" alt="brand" style={{ width: '90px', height: 'auto' }}/>
            <Link className="nav-title ms-3" to='/'>DS Learn</Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              
              <Link to='category-course-list' className="nav-link" href="#">Courses</Link>

               
              
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to='/faq'>FAQ</Link>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Professor
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {professorLoginStatus!='true' &&
                    <>
                      <li><Link className="dropdown-item" to="/professor-login">Login</Link></li>
                      <li><Link className="dropdown-item" to="/professor-register">Register</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                    </>
                  }

                  <li><Link className="dropdown-item" to="/professor-dashboard" >Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/professor-logout">Log out</Link></li>
                </ul> 
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {studentLoginStatus!='true' &&
                    <>
                      <li><Link className="dropdown-item" to="/student-login">Login</Link></li>
                      <li><Link className="dropdown-item" to="/student-register">Register</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                    </>
                  }
                  <li><Link className="dropdown-item" to="/student-dashboard" >Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/student-logout">Log out</Link></li>
                </ul> 
              </li>

              
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;
  