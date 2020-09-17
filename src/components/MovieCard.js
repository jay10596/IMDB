import React from "react";
import { IMAGE_URL, POSTER_SIZE } from "../config"
import {Link} from "react-router-dom";

function MovieCard(movieTv) {
    return(
        <div className='mr-8'>
            <Link to={`/about/${movieTv.data.id}`}>
                <div className='relative w-36'>
                    <img src={`${IMAGE_URL}${POSTER_SIZE}//${movieTv.data.poster_path}`} className='w-full rounded-lg' alt="Poster"/>

                    <div className='absolute ml-4 -mt-4 flex justify-center items-center w-10 h-10 rounded-full bg-blue-900 shadow-2xl'>
                        <p className='text-white text-xs font-medium'>{Math.round(movieTv.data.vote_average * 100) / 10}</p> <p className='text-white text-xxs mb-4'>%</p>
                    </div>

                    <p className='mx-2 mt-8 text-sm font-bold'>{movieTv.data.title || movieTv.data.name}</p>

                    <p className='mx-2 text-gray-800 text-sm font-light'>{movieTv.data.release_date || movieTv.data.first_air_date}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard