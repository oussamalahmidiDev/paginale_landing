import logoPaginaleMin from "../assets/img/logo-paginale-min.png";
import React from "react";
import {Link, NavLink, useLocation } from "react-router-dom";

export const Header = (props: any) => {
    const  location = useLocation();
    console.log("locaton", location);
    return         <header id="header" className={"fixed-top " + location.pathname !== '/'? "header-inner-pages" :""}>
        <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
                <Link to="/">
                    <img src={logoPaginaleMin}/>
                </Link>
            </h1>
            <nav className="nav-menu d-none d-lg-block">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/solutions" activeClassName="active">
                            Solutions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <NavLink to="/about" activeClassName="active">*/}
                    {/*        About*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink to="/about" activeClassName="active">*/}
                    {/*        About*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink to="/about" activeClassName="active">*/}
                    {/*        About*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<Link to="/" className="active">*/}
                    {/*    Home*/}
                    {/*</Link>*/}
                    {/*<li><a href="#about">About</a></li>*/}
                    {/*<li><a href="#solutions">Solutions</a></li>*/}
                    {/*<li><a href="#portfolio">Portfolio</a></li>*/}
                    {/*<li><a href="#team">Team</a></li>*/}
                    {/*<li className="drop-down">*/}
                    {/*    <a href="">Drop Down</a>*/}
                    {/*    <ul>*/}
                    {/*        <li><a href="#">Drop Down 1</a></li>*/}
                    {/*        <li className="drop-down">*/}
                    {/*            <a href="#">Deep Drop Down</a>*/}
                    {/*            <ul>*/}
                    {/*                <li><a href="#">Deep Drop Down 1</a></li>*/}
                    {/*                <li><a href="#">Deep Drop Down 2</a></li>*/}
                    {/*                <li><a href="#">Deep Drop Down 3</a></li>*/}
                    {/*                <li><a href="#">Deep Drop Down 4</a></li>*/}
                    {/*                <li><a href="#">Deep Drop Down 5</a></li>*/}
                    {/*            </ul>*/}
                    {/*        </li>*/}
                    {/*        <li><a href="#">Drop Down 2</a></li>*/}
                    {/*        <li><a href="#">Drop Down 3</a></li>*/}
                    {/*        <li><a href="#">Drop Down 4</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li><a href="#contact">Contact</a></li>*/}
                </ul>
            </nav>

        </div>
    </header>

}
