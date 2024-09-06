// SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Ensure this path is correct
import img from '../assets/Filing-system-bro.svg';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError("Email and Password are required");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Sign up successful!");
            setError("");
            navigate('/home');
        } catch (error) {
            setSuccess("");
            setError(error.message);
        }
    };

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt="form-Img" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <p className="text-center mb-4">Welcome to Master ToDo App. Fill out the form to save your info.</p>
                    <form onSubmit={handleSignUp}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                className="form-control"
                                placeholder="Enter your full name here"
                                required
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password here"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="passwordConfig">Re-Enter Password</label>
                            <input
                                type="password"
                                id="passwordConfig"
                                className="form-control"
                                placeholder="Re-enter your password here"
                                required
                            />
                        </div>

                        <div className="form-check mb-4">
                            <label className="form-check-label" htmlFor="newsletter">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="newsletter"
                                />
                                Subscribe to Newsletter
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Sign Up
                        </button>

                        {error && <p className="text-danger mt-3">{error}</p>}
                        {success && <p className="text-success mt-3">{success}</p>}
                    </form>
                    <p className="text-center mt-4">I already have an account <a href="/signin">Sign In</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
