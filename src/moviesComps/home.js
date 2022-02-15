import React, { useContext } from 'react';
import { MoviesContext } from '../context/moviesContext';
import MovieItem from './movieItem';

function Home(props){
    let { moviesAr } = useContext(MoviesContext);


    return(
        <div className='row g-4 mt-5'>
            { moviesAr.map((item) => {
                    return (
                       <MovieItem key={item.imdbID} imdbID={item.imdbID} item={item} />
                    )
                }
            )}
        </div> 
    )
}

export default Home