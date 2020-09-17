import React, {Component} from "react";
import {API_KEY, API_URL, BACKDROP_SIZE, IMAGE_URL, POSTER_SIZE} from "../config";
import { FaFilm } from 'react-icons/fa';
import ActorCard from './ActorCard'

class Detail extends Component{
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            movie: []
        }

        this.fetchMovieDetail = this.fetchMovieDetail.bind(this)
    }

    componentDidMount() {
        this.fetchMovieDetail()
    }

    render() {
        const actors = this.state.movie.cast ? this.state.movie.cast.map(actor => <ActorCard data={actor} key={actor.id}  />) : null
        // const url =
        return(
            this.state.loading ? null :
                <div>
                    <div className='relative w-full flex items-center justify-center'>
                        <img src={`${IMAGE_URL}${BACKDROP_SIZE}//${this.state.movie.backdrop_path}`} className='w-full h-100 object-cover' alt="Background Image"/>

                        <div className='absolute flex w-8/12 h-80 shadow-2xl'>
                            <img src={`${IMAGE_URL}${POSTER_SIZE}//${this.state.movie.poster_path}`} className='w-64 object-cover' alt="Background Image"/>

                            <div className='relative imgBlackOverlay w-full px-8 font-sans text-white'>
                                <p className='text-4xl font-medium font-mono py-4'>{this.state.movie.title || this.state.movie.name}</p>

                                <p className='text-md font-semibold'>PLOT</p>

                                <p className='text-md'>{this.state.movie.overview}</p>

                                <div className='absolute bottom-0 right-0 px-8 py-4 text-6xl'>
                                    <FaFilm />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center'>
                        <div className='w-8/12 py-4'>
                            <h1 className='text-2xl font-normal font-sans py-8'>Actors</h1>

                            <div className='flex flex-wrap justify-between'>
                                {actors}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    // Using this function instead of componentDidMount because we need image url to display and as render is called first when the component is created, we will have error in the console. To avoid those errors, I can call this function in the render, or I can fetch data in componentDidMount and add if condition with <img> just like SearchBar component.
    fetchMovieDetail() {
        fetch(`${API_URL}movie/${this.props.id}?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    movie: res
                })
            })

        fetch(`${API_URL}movie/${this.props.id}/credits?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    movie: Object.assign(this.state.movie, res)
                })
            })
    }

}

export default Detail