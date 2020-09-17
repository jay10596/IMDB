import React, { useState } from 'react';
import {API_KEY, API_URL, BACKDROP_SIZE, IMAGE_URL, POSTER_SIZE} from "../config";
import './Components.css'

function Searchbar() {
    // With useState Hook, you can use state in a functional component.
    const [image, setImage] = useState(null);

    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => {
            setImage(res.results[0].backdrop_path)
        })

    return(
        <div className='relative'>
            <div className="imgBlueOverlay">
                {image ? <img src={`${IMAGE_URL}${BACKDROP_SIZE}//${image}`} className='w-full h-80 object-cover' alt="Poster"/> : null}
            </div>

            <div className='centered w-max'>
                <p className='font-bold text-5xl text-white'>Welcome.</p>
                <p className='font-semibold text-3xl text-white'>Millions of movies, TV shows and people to discover. Explore now.</p>

                <div className=' flex items-center mt-16'>
                    <input className='relative w-full py-2 pl-4 rounded-l-full rounded-r-full focus:outline-none' type="text" placeholder='Search Movie, TV Show or Actors...'/>
                    <button className='right-0 absolute rounded-l-full rounded-r-full px-4 py-2.5 bg-gradient-to-t text-white font-semibold from-teal-400 to-blue-500'><p className='text-sm'>Search</p></button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

