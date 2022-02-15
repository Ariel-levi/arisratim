import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_KEY } from '../config/config';
import LottieAnimation from './lottieAnimation';
import MovieItem from './movieItem';
import SearchItem from './searchItem';

function SearchQ(props){
    const [moviesAr, setMoviesAr] = useState([]);
    let paramsSearch = useParams();
    let search = paramsSearch.searchQ;
    let nav = useNavigate();

    useEffect(() => {
            doApi(search);  
    }, [search])
    
    const doApi = async (_Search) => {
        let url = `https://www.omdbapi.com/?s=${_Search}&apikey=${API_KEY}`;
        let resp = await axios.get(url);
        {resp.data.Search ? 
            setMoviesAr(resp.data.Search) 
        : searchNotFound()
        }
};  

    const searchNotFound = () => {
        toast.warning("No movies in this Name, Search Again 🤔");
        nav(-1);

    }

    return(
        <React.Fragment>
            {moviesAr.length != 0 ?  
            <div className='row g-4'>
                <SearchItem />
                { moviesAr.map((item) => {
                    return (
                        <MovieItem key={item.imdbID} imdbID={item.imdbID} item={item} />
                        )
                    }
                    )}
            </div> 
            : <LottieAnimation />}
        </React.Fragment>
    )
}

export default SearchQ
