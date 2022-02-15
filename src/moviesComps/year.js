import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MoviesContext } from '../context/moviesContext';
import MovieItem from './movieItem';
import './css/years.css';
import LottieAnimation from './lottieAnimation';
import { toast } from 'react-toastify';
import { API_KEY } from '../config/config';

function Year(props){
    let { search } = useContext(MoviesContext);
    const [moviesAr, setMoviesAr] = useState([]);
    const nav = useNavigate();
    let paramsYear = useParams();
    let year = paramsYear.yyyy;

    useEffect(() => {
            doApi(search,year); 
            console.log(moviesAr);           
    }, [year])
    
    const doApi = async (_Search,_Year) => {
<<<<<<< HEAD
        let url = `https://www.omdbapi.com/?s=${_Search}&y=${_Year}&apikey=${API_KEY}`;
=======
        let url = `https://www.omdbapi.com/?s=${_Search}&y=${_Year}&apikey=API_KEY`;
>>>>>>> e18019c83ed1df69492b4c1dae796788e216212d
        let resp = await axios.get(url);
        // console.log(resp.data.Search);
        // setMoviesAr(resp.data.Search);
        {resp.data.Search ? 
            setMoviesAr(resp.data.Search) 
        : yearNotFound()
        }
    };

    const yearNotFound = () => {
        toast.warning("No movies in this Year 🤷‍♂️");
        nav("/year/2021")

    }

    return(
        <div className='row g-4 mt-5'>
            <div className='mb-5 years_btn container'>
                <Link to="/year/2021" className='btn btn-warning my-3'>2021</Link>
                <Link to="/year/2020" className='btn btn-warning my-3'>2020</Link>
                <Link to="/year/2000" className='btn btn-warning my-3'>2000</Link>
                <Link to="/year/1995" className='btn btn-warning my-3'>1995</Link>
                <Link to="/year/1989" className='btn btn-warning my-3'>1989</Link>
            </div>
            {moviesAr.length != 0 ? "" : <LottieAnimation />}
            <React.Fragment>
                { moviesAr.map((item) => {
                    return (
                        <MovieItem key={item.imdbID} imdbID={item.imdbID} item={item} />
                        )
                    }
                )} 
            </React.Fragment>
        </div> 
    )
}

export default Year
