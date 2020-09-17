import React, {Component} from "react";
import { Link } from "react-router-dom"
import Popular from "../components/Popular";
import Trending from "../components/Trending";
import Leaderboard from "../components/Leaderboard";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return(
        <div>
            <Navbar/>

            <div className='mx-24'>
                <Searchbar />

                <Popular />

                <Trending />

                <Leaderboard />
            </div>

            <Footer />
        </div>
    )
}

export default Home


