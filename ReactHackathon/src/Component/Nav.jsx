import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="container">
            <div className="row">
                <div className="col-4">
                    {/* You can add a logo or branding here if needed */}
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/todo" className="nav-link">My ToDo</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
