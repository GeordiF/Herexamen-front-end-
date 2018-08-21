import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <header>
        <div className="white-banner">
            <div className="wrapper cfx">
                <nav className="nav-utility">
                    <ul>
                        <li><a href="#user">Ivan Waumans</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="black-banner">
            <div className="wrapper cfx">
                <div id="logo">
                    <img src="/svg/KdG_H_Closed_White.svg" alt="Logo van Karel de Grote Hogeschool" />
                </div>
                <nav className="nav-main-responsive">
                    <ul>
                        <li className="search"><a href="#search">Zoeken</a></li>
                        <li className="menu">
                            <a href="#menu-trigger">
                                <div className="icon-menu">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </div>
                                Menu
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-main">
                    <ul>
                        <li className="home"><Link to="/">Home</Link></li>
                        <li className="students"><Link to="/students">Studenten</Link></li>
                        <li className="practice"><Link to="/">Oefenen</Link></li>
                        <li className="manage"><Link to="/students/add">Beheer</Link></li>
                        <li className="search"><a href="#search">Zoeken</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="black-banner">
            <div className="crumbtrail">
                <div className="wrapper">
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Studenten</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="black-banner">
            <div className="wrapper">
                <div className="arrow">
                    <nav className="nav-sub">
                        
                        <div className="nav-group third">
                            <h2>Studenten ..</h2>
                            <ul>
                                <li className="active"><a href="studenten.html">Overzicht</a></li>
                                <li><a href="studenten-per-klasgroep.html">Per klasgroep</a></li>
                                <li><a href="studenten-per-vak.html">Per vak</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;