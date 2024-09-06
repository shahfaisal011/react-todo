// SignIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Ensure this path is correct
import img2 from '../assets/Filing-system-rafiki.svg';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        
        if (!email || !password) {
            setError("Email and Password are required");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={img2} alt="form" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Sign In</h2>
                    <p className="text-center mb-4">Welcome to Master ToDo App. Fill out the form to access your tasks.</p>
                    <form onSubmit={handleSignIn}>
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

                        <div className="text-end mb-4">
                            <a href="#" className="text-muted">Forgot Password?</a>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block"
                        >
                            Sign In
                        </button>
                        {error && <p className="text-danger mt-3">{error}</p>}
                    </form>
                    <p className="text-center mt-4">
                        I don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
