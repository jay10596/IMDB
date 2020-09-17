import React, {Component} from "react"
import {API_KEY, API_URL} from "../config"
import MovieCard from "./MovieCard"
import './Components.css'

class Trending extends Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            movies: []
        }

        this.fetchTrendingMovies = this.fetchTrendingMovies.bind(this)
    }

    componentDidMount() {
        this.setState({
            loading:true
        })

        //From the api documentation
        const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchTrendingMovies(endpoint)
    }

    render() {
        const trendingMovies = this.state.movies.map(movie => <MovieCard data={movie} key={movie.id} />)
        let n = 300

        return(
            <div className='my-4'>
                <h1 className='mx-12 text-2xl font-normal font-sans py-4'>Trending</h1>

                <div className='relative flex overflow-x-scroll py-2 h-max'>
                    <div className='design'>
                        {[...Array(n)].map((e, i) => <div className="vertical" style={{height: Math.floor(Math.random() * 200) + 100}} key={i}></div>)}
                    </div>

                    <div className='absolute flex'>
                        <div className='ml-12'></div>

                        {trendingMovies}
                    </div>
                </div>
            </div>
        )
    }

    fetchTrendingMovies(endpoint) {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    movies: res.results
                })
            })
    }

}

export default Trending