import React from 'react';
import { Link } from 'react-router-dom';
import '../moviesComps/css/movieItem.css';
import ReactTooltip from 'react-tooltip';

function MovieItem(props){
    let item = props.item;
    let id = props.imdbID;

    return(
        <div className='col-lg-4 col-md-6 col-xs-4'>
            <img data-tip={item.Title} src={item.Poster != "N/A" ? item.Poster : "/images/no_image.png"} alt={item.Title} />
            <br/>
            <Link className='btn btn-warning mt-3' to={"/video/"+id}>More Info</Link>
            <ReactTooltip place="top" type="light" effect="float" /> {/* Tool tip for name of the movie */}
        </div>
    )
}

export default MovieItem