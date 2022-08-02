//dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AllCirculars from "./Pages/AllCirculars";
import Blogs from "./Pages/Blogs";
import Classes from "./Pages/Classes";
import logo from "./assets/logo.png";
import AchievementsDetails from "./components/classes/AchievementsDetails";

//css
import "./Navbar.css";

//code
const App = () => {
    return (
        <div className="app-outer-container">
            <Router>
                {/* navbar */}
                <nav className="navbar navbar-expand-md bg-dark navbar-container fixed-top container-fluid">
                    {/* navbarleft */}
                    <Link className="navbar-brand" to="/home">
                        <img
                            src={logo}
                            className="logo"
                            alt="Logo"
                            width="140px"
                        />
                    </Link>

                    {/* toggle icon */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navbar right */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto"></ul>
                        <ul className="navbar-nav nav-right">
                            <Link to="/home" className="nav-link active">
                                <li className="nav-item active">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </li>
                            </Link>
                            <Link to="/about" className="nav-link">
                                <li className="nav-item">About</li>
                            </Link>
                            <Link to="/classes" className="nav-link">
                                <li className="nav-item">Classes</li>
                            </Link>
                            <Link to="/blogs" className="nav-link">
                                <li className="nav-item">Blogs</li>
                            </Link>
                            <Link to="/contact" className="nav-link">
                                <li className="nav-item">Contact</li>
                            </Link>

                            <Link to="/circulars" className="nav-link">
                                <li className="nav-item">Circulars</li>
                            </Link>
                        </ul>
                    </div>
                </nav>

                {/* body */}
                <Switch>
                    <div className="router-content mt-5">
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/classes">
                            <Classes />
                        </Route>
                        <Route exact path="/blogs">
                            <Blogs />
                        </Route>
                        <Route exact path="/circulars">
                            <AllCirculars />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/classes/:id">
                            <AchievementsDetails />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
