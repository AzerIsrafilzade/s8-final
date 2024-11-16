import React from 'react'
import './Navbar.css'
const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg  py-4">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src="/images/logo.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Feature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Download</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <button className='btn btn-white me-3'>Login</button>
        <button className='navbar-btn'>Sign up</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar