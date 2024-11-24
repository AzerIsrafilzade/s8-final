import React, {useRef} from 'react'
import './Navbar.css'

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar: React.FC = () => {

  // use ile bashlayan ifadeler Hook-lar adlanir (2018-den sonra yarandi)
  // useRef-i return-nun for if else-in icinde isletmek olmaz
  // class componentler => kecildi functional component-lere

  const mobileMenyuUnvani = useRef<HTMLDivElement>(null)
  // console.log(mobileMenyuUnvani.current)

  const navbariAc = () => {

    if(mobileMenyuUnvani.current) {
      mobileMenyuUnvani.current.classList.add("menyunu-acan-class")
    }
      
  };

  const navbariBagla = () => {
    if(mobileMenyuUnvani.current) {
      mobileMenyuUnvani.current.classList.add(".close-icon")
    }
  };

  // DOM Document Object Model
  // Virtual DOM
  return (
    <>
      <div ref={mobileMenyuUnvani} className="mobile-menyu">
        <div className="container">
          <button className="close-icon" onClick={navbariBagla}>
            <IoIosCloseCircleOutline />
          </button>

          <div className="mobile-menyu-links d-flex flex-column gap-3 align-items-center">
            <a href="#" className="nav-link">Feature</a>
            <a href="#" className="nav-link">Download</a>
            <a href="#" className="nav-link">Pricing</a>
          </div>

          <div className="signin-section d-flex flex-column gap-3">
            <a href="#" className="btn text-center">Login</a>
            <a href="#" className="navbar-btn btn nav-link text-center">Sign up</a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg  py-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="" />
          </a>
          {/* JS - real time complier tsc */}
          <button onClick={navbariAc} className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <HiMiniBars3BottomRight />
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
    </>

  );
}

export default Navbar