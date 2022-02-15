import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LottieAnimation from './lottieAnimation';
import { API_KEY } from '../config/config';
import './css/video.css';

function Video(props){
    const [videoAr, setVideoAr] = useState([]);
    let paramsId = useParams();
    let nav = useNavigate();
    let id = paramsId.id

    useEffect(() => {
        doApi(id);
    }, [id])
    
    const doApi = async (_VideoId) => {
<<<<<<< HEAD
        let url = `https://www.omdbapi.com/?i=${_VideoId}&apikey=${API_KEY}`;
=======
        let url = `https://www.omdbapi.com/?i=${_VideoId}&apikey=API_KEY`;
>>>>>>> e18019c83ed1df69492b4c1dae796788e216212d
        let resp = await axios.get(url);
        // console.log(resp.data);
        setVideoAr(resp.data);
    };

    // ========================== stars
        // get stars from API
        const ratings = videoAr.imdbRating / 2;
    
        // Total Stars
        const starsTotal = 5;
           
        // Get percentage
        const starPercentage = (ratings / starsTotal) * 100;
    
        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;  
    // ========================== stars end

    return(
        <React.Fragment>

        {videoAr.length != 0 ? 
        <div className='mt-5'>
            <h1>{videoAr.Title}</h1>
            <div className='d-sm-flex d-block mt-5'>
                <div className='me-4 col-lg-6'> 
                    <a href={"https://www.imdb.com/title/"+videoAr.imdbID} target="_blank" ><img src='/images/imdb.png' /></a>
                    <div className="stars-outer">
                        <div className="stars-inner" style={{width: starPercentageRounded}}></div>
                    </div>
                    <span className="number-rating mx-2 mb-4">{ratings ? <span>{ratings} <i className='fas fa-percentage'></i></span> : "No Ratings 😞"}</span>
                    <div className='mt-5 info '>
                        <h3 className='text-warning'>{videoAr.Genre ? "Genre : " : ""}</h3>
                        <h3 className=''>{videoAr.Genre != "N/A" ? videoAr.Genre : "No Genre available"}</h3>
                        <h3 className='text-warning'>{videoAr.Year ? "Year : " : ""}</h3>
                        <h3 className=''>{videoAr.Year ? videoAr.Year : ""}</h3>
                        <h3 className='text-warning'>{videoAr.Actors != "N/A" ? "Actors :" : ""}</h3>
                        <h3 className=''>{videoAr.Actors != "N/A" ? videoAr.Actors : ""}</h3>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={videoAr.Poster != "N/A" ? videoAr.Poster : "/images/no_image.png"} />
                </div>
            </div>
            <h3 className='my-4'>{videoAr.Plot != "N/A" ? videoAr.Plot : "There's no synopsis for this movie."}</h3>
            <button className='btn btn-warning text-dark' onClick={() => {
                nav(-1);
            }} >Back</button>
            </div>  
            :
            <LottieAnimation />
        }
        </React.Fragment>
    )
}

export default Video
