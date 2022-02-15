import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './css/search.css';

function SearchItem(props){
    let searchRef = useRef();
    let nav = useNavigate();

    const search = () => {
        let search = searchRef.current.value;
        {search ? nav("/search/"+search) : toast.error("You need to enter something 😒")};
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            search();
        }
    }

    return(
        <div className='d-flex my-5 search'>
            <input ref={searchRef} onKeyPress={handleKeyPress} className='form-control' type="search" placeholder='Enter Movie Name...' />
            <button className='searchBtn' onClick={search}>Search</button>
        </div>

    )
}

export default SearchItem