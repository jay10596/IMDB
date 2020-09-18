import React from "react";

function Footer() {
    return(
        <div className='bg-blue-900 h-80 flex justify-center items-center'>
            <div className='mx-64 right-0 bottom-0 flex justify-center items-center'>
                <div className='flex flex-col justify-end'>
                    <img src="/FooterLogo.png" className='w-32 h-32 object-contain' alt="Footer Logo"/>

                    <button className='py-1 px-2 text-blue-400 font-semibold bg-white rounded-lg'>el.aje</button>
                </div>

                <div className='flex ml-24'>
                    <div className='pr-8 ml-2 text-gray-400 font-light'>
                        <h1 className='font-semibold text-white text-lg'>THE BASICS</h1>

                        <p>About TMDB</p>
                        <p>Contact Us</p>
                        <p>APi</p>
                        <p>System</p>
                    </div>

                    <div className='pr-8 ml-2 text-gray-400 font-light'>
                        <h1 className='font-semibold text-white text-lg'>GET INVOLVED</h1>

                        <p>FAQ</p>
                        <p>Call Us</p>
                        <p>iOS Update</p>
                        <p>OS</p>
                    </div>

                    <div className='pr-8 ml-2 text-gray-400 font-light'>
                        <h1 className='font-semibold text-white text-lg'>COMMUNITY</h1>

                        <p>iMDB</p>
                        <p>Contact</p>
                        <p>Deployment</p>
                        <p>Amazon</p>
                    </div>

                    <div className='pr-8 ml-2 text-gray-400 font-light'>
                        <h1 className='font-semibold text-white text-lg'>LEGAL</h1>

                        <p>About TMDB</p>
                        <p>Contact Us</p>
                        <p>IDE</p>
                        <p>Software</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer