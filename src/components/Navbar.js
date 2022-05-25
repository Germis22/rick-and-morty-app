import React from 'react'

const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Characters
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="/locations"
            >
              Locations
            </a>
            <a className="nav-link active" aria-current="page" href="/episodes">
              Episodes
            </a>
            <span className="navbar-text">GPCH</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar