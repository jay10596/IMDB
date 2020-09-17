import React from "react";
import {IMAGE_URL, POSTER_SIZE} from "../config";

function ActorCard(props) {
    return( props.data.profile_path ?
        <div className='flex w-64 h-32 my-2'>
            <img src={`${IMAGE_URL}${POSTER_SIZE}//${props.data.profile_path}`} className='w-5/12 object-cover' alt="Background Image"/>

            <div className='w-7/12 bg-gray-900 text-white p-4'>
                <p className='text-md font-semibold font-sans'>{props.data.name}</p>
                <p className='text-sm py-2 font-serif'>{props.data.character}</p>
            </div>
        </div> : null
    )
}

export default ActorCard