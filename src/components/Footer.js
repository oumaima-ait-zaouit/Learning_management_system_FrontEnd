function Footer() {
    return (
      <nav className="navbar navbar-expand-lg bg-white mt-5">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="ds_logo.jpeg" alt="brand" style={{ width: '100px', height: 'auto' }}/>
            <span>DS Learn</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Categorie</a>
              <a className="nav-link" href="#">Courses</a>
              <a className="nav-link" href="#">Professors</a>
              <a className="nav-link" href="#">About Us</a>
              <a className="nav-link" href="#">FAQ</a>
              <a className="nav-link disabled">links</a>
              
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Footer;