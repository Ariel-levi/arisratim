import React from 'react';
import {Outlet, Link, useNavigate} from "react-router-dom"
import './css/layout.css';

function Layout(props){
    let nav = useNavigate();
    let dt = new Date();

    const backHome = () => {
        nav("/");
    }

    return(
        <React.Fragment>
            <header className='center container-fluid' style={{backgroundImage: "url(/images/slide.jpg)"}}>
                <div className='container'>
                    <img onClick={backHome} className='logo' src="images/logo.png" />
                </div>
            </header>
            <nav>
                <Link to="/" className='link'>Home</Link>
                <Link to="/year/2021" className='link'>Years</Link>
                <Link to="/search/marvel" className='link'>Search</Link>
            </nav>
            <main>
                <div className='container'>
                    <Outlet />
                </div>
            </main>
            <footer className="center container-fluid mt-5">
                <div className="container text-center">
                    All right reserved © Ariel Levi {dt.getFullYear()} <i class="fab fa-youtube"></i>
                </div>
            </footer>
        </React.Fragment> 
    )
}

export default Layout