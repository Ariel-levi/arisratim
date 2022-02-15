import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { MoviesContext } from '../context/moviesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './home';
import Layout from './layout';
import SearchQ from './searchQ';
import Video from './video';
import Year from './year';
import Page404 from './Page404';
import { API_KEY } from '../config/config';

function AppMovies(props){
    const [moviesAr, setMoviesAr] = useState([]);
    const [search, setSearch] = useState("marvel");

    useEffect(() => {
        doApi(search);
    }, [])
    
    const doApi = async (_Search) => {
        let url = `https://www.omdbapi.com/?s=${_Search}&apikey=${API_KEY}`;
        let resp = await axios.get(url);
        // console.log(resp.data.Search);
        setMoviesAr(resp.data.Search);
        
    };

    return(
        <React.Fragment>
            <MoviesContext.Provider value={{moviesAr:moviesAr,setSearch:setSearch,search:search}}>
                <Router>
                    <ToastContainer theme='colored' />
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />}  />
                            <Route path="/year" element={<Year />}  />
                            <Route path="/year/:yyyy" element={<Year />}  />
                            <Route path="/search" element={<SearchQ />}  />
                            <Route path="/search/:searchQ" element={<SearchQ />}  />
                            <Route path="/video/:id" element={<Video />}  />
                            <Route path="/*" element={<Page404 />}  />
                        </Route>            
                    </Routes>
                </Router>
            </MoviesContext.Provider>
        </React.Fragment>
    )
}

export default AppMovies
