import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Terms from "./components/Terms";
import BlogPost from "./components/BlogPost";
import Write from "./components/Write";

function App() {
    return (<>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id/" element={<BlogPost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/terms-and-conditions" element={<Terms />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default App;
