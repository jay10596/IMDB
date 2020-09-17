import React from "react";
import { FaBell, FaPlus, FaSearch } from 'react-icons/fa';
import {Link, BrowserRouter} from "react-router-dom";

function Navbar() {
    return(
        <div className='bg-blue-900 py-2'>
            <div className='mx-24 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <h1 className='text-3xl font-bold multicolorLogo'>TMDB</h1>
                    </Link>

                    <div className='py-6 px-2 ml-6 mr-10 mt-1 rounded-l-full rounded-r-full transform rotate-90 bg-gradient-to-t from-teal-400 to-blue-500'></div>

                    <p className='mx-2 text-sm font-normal text-white'>Movies</p>
                    <p className='mx-2 text-sm font-normal text-white'>TV</p>
                    <p className='mx-2 text-sm font-normal text-white'>People</p>
                </div>

                <div className='flex items items-center text-white'>
                    <FaPlus className='mx-4' />

                    <p className='mx-4 text-xs font-normal border border-white p-1 rounded-sm'>EN</p>

                    <FaBell className='mx-4' />

                    <div className='mx-4 w-8 h-8 p-2 rounded-full font-semibold bg-purple-500 flex justify-center items-center'>El</div>

                    <FaSearch className='mx-4 text-blue-400 text-xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar