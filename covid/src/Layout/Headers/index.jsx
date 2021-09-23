import React from 'react'

import { Link } from "react-router-dom"
export const Headers = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:"red"}}>COVID-19 Tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                            <li className="nav-item">
                                <Link to="/" style={{textDecoration:"none", color:"red"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" style={{textDecoration:"none", color:"red"}}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" style={{textDecoration:"none", color:"red"}}>Dashboard</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </div>
        </nav>

    )
}
