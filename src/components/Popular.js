import React, {Component} from "react";
import {API_KEY, API_URL} from "../config";
import MovieCard from "./MovieCard";
import './Components.css'

class Popular extends Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            moviesTv: [],
            tvMode: false
        }

        this.fetchPopularMovies = this.fetchPopularMovies.bind(this)
        this.changeMode = this.changeMode.bind(this)
    }

    componentDidMount() {
        this.setState({
            loading:true
        })

        //From the api documentation
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchPopularMovies(endpoint)
    }

    render() {
        const popularMoviesTV = this.state.moviesTv.map(movieTv => <MovieCard data={movieTv} key={movieTv.id} />)

        return(
            <div>
                <div className='mx-12 my-4 flex items-center'>
                    <h1 className='text-2xl font-normal font-sans mr-4'>What's Popular</h1>

                    {
                        this.state.tvMode ?
                            <div className='w-max h-max border border-blue-900 rounded-l-full rounded-r-full'>
                                <button onClick={() => this.changeMode(false)} className='py-1 px-3 rounded-l-full rounded-r-full bg-white focus:outline-none'><p className='text-sm font-semibold text-blue-900'>Movies</p></button>
                                <button className='py-1 px-3 rounded-l-full rounded-r-full bg-blue-900 focus:outline-none'><p className='text-sm font-semibold multicolorText'>TV</p></button>
                            </div>
                            :
                            <div className='w-max h-max border border-blue-900 rounded-l-full rounded-r-full'>
                                <button className='py-1 px-3 rounded-l-full rounded-r-full bg-blue-900 focus:outline-none'><p className='text-sm font-semibold multicolorText'>Movies</p></button>
                                <button onClick={() => this.changeMode(true)} className='py-1 px-3 rounded-l-full rounded-r-full bg-white focus:outline-none'><p className='text-sm font-semibold text-blue-900'>TV</p></button>
                            </div>

                    }
                </div>

                <div className='flex overflow-x-scroll py-2 h-max'>
                    <div className='ml-12'></div>

                    {popularMoviesTV}
                </div>

            </div>
        )
    }

    fetchPopularMovies(endpoint) {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    moviesTv: res.results
                })
            })
    }

    changeMode(bool) {
        this.setState({
            tvMode: bool
        })

        const endpoint = bool ? `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1` : `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchPopularMovies(endpoint)
    }
}

export default Popular