import React from 'react';

const MovieList = (props) => { 
    // const FavouriteComponent = props.favourite;
    
    return (
        <div className='row-container d-flex'>
            {/* {props.movies.map((movie, index) =>  */}
            <div className='movie-container d-flex justify-content-start m-3'>
                <img src="https://image.tmdb.org/t/p/w200/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="title" className='cover-image'/>
                {/* <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-center'> */}
                    {/* <FavouriteComponent /> */}
                {/* </div>     */}
                <div className='movie-title'>Movie Title</div>
                <div className="info-column">
                    <div className="movie-infos">Year: 2012</div>
                    <div className="movie-infos">Genre: Thriller</div>
                </div>
            </div>
            
            {/* )} */}
        </div>
        );
    };

export default MovieList;
