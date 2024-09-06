// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import Home from './Component/Home';
import About from './Component/About';
import { AuthProvider, useAuth } from './Component/AuthContext';
import Nav from './Component/Nav';
import ToDo from './Component/ToDo';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route 
                            path="/" 
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/todo" element={<ToDo />} />
                        {/* <Route path="/" element={<Navigate to="/signin" />} /> */}
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

function Layout({ children }) {
    const location = useLocation();
    const { user } = useAuth();
    const isAuthRoute = location.pathname === '/signin' || location.pathname === '/signup';

    return (
        <>
            {!isAuthRoute && user && <Nav />}
            {children}
        </>
    );
}

function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/signin" />;
    }

    return children;
}

export default App;
