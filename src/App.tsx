import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Terms from "./components/Terms";

function App() {
    return (<>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/terms-and-conditions" element={<Terms />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default App;
