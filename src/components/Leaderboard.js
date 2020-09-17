import React from "react";

function Leaderboard() {
    var n1 = 0
    var n2 = 0
    return(
        <div className='mx-12 my-8'>
            <div className='flex justify-start items-center'>
                <h1 className='text-2xl font-normal font-sans mr-8'>Leaderboard</h1>

                <div>
                    <div className='flex justify-start items-center'>
                        <div className='w-2 h-2 rounded-full bg-gradient-to-r from-white to-teal-600'></div>

                        <p className='mx-2 text-sm font-light'>All Time Edits</p>
                    </div>

                    <div className='flex justify-start items-center'>
                        <div className='w-2 h-2 rounded-full bg-gradient-to-r from-white to-red-600'></div>

                        <p className='mx-2 text-sm font-light'>This Week</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between w-full'>
                <div className='w-1/2'>
                    <div className='flex items-center my-8'>
                        <img src="/pp1.jpg" className='w-16 h-16 rounded-full object-cover mr-4' alt="Footer Logo"/>

                        <div className='w-full'>
                            <p className='font-semibold'>Shahrukh Khan</p>

                            <div className='flex items-center'>
                                <div className="progress my-2" style={{width: `${n1 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #38b2ac, #38b2ac)'}}></div> <p className='mx-2 text-xs font-semibold'>{n1}%</p>
                            </div>

                            <div className='flex items-center'>
                                <div className="progress" style={{width: `${n2 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #ed8936, #f56565)'}}></div> <p className='mx-2 text-xs font-semibold'>{n2}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center my-8'>
                        <img src="/pp2.jpg" className='w-16 h-16 rounded-full object-cover mr-4' alt="Footer Logo"/>

                        <div className='w-full'>
                            <p className='font-semibold'>Conor McGregor</p>

                            <div className='flex items-center'>
                                <div className="progress my-2" style={{width: `${n1 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #38b2ac, #38b2ac)'}}></div> <p className='mx-2 text-xs font-semibold'>{n1}%</p>
                            </div>

                            <div className='flex items-center'>
                                <div className="progress" style={{width: `${n2 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #ed8936, #f56565)'}}></div> <p className='mx-2 text-xs font-semibold'>{n2}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 mx-12'>
                    <div className='flex items-center my-8'>
                        <img src="/pp3.jpg" className='w-16 h-16 rounded-full object-cover mr-4' alt="Footer Logo"/>

                        <div className='w-full'>
                            <p className='font-semibold'>Nate Diaz</p>

                            <div className='flex items-center'>
                                <div className="progress my-2" style={{width: `${n1 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #38b2ac, #38b2ac)'}}></div> <p className='mx-2 text-xs font-semibold'>{n1}%</p>
                            </div>

                            <div className='flex items-center'>
                                <div className="progress" style={{width: `${n2 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #ed8936, #f56565)'}}></div> <p className='mx-2 text-xs font-semibold'>{n2}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center my-8'>
                        <img src="/pp4.jpg" className='w-16 h-16 rounded-full object-cover mr-4' alt="Footer Logo"/>

                        <div className='w-full'>
                            <p className='font-semibold'>Jorge Masvidal</p>

                            <div className='flex items-center'>
                                <div className="progress my-2" style={{width: `${n1 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #38b2ac, #38b2ac)'}}></div> <p className='mx-2 text-xs font-semibold'>{n1}%</p>
                            </div>

                            <div className='flex items-center'>
                                <div className="progress" style={{width: `${n2 = randomNumber()}%`, backgroundImage: 'linear-gradient(to right, white, #ed8936, #f56565)'}}></div> <p className='mx-2 text-xs font-semibold'>{n2}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function randomNumber() {
    return Math.floor(Math.random() * 100).toString()
}

export default Leaderboard