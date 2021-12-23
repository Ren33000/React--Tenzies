import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import axios from 'axios';

const MovieList = (props) => { 
    return (
        <div className='row-container d-flex'>
            <div className='movie-container d-flex justify-content-start m-3'>
                <img src="" alt="title" className='cover-image'/>
                <div className='movie-title'>Movie Title</div>
                <div className="info-column">
                    <div className="movie-infos">Year: 2012</div>
                    <div className="movie-infos">Genre: Thriller</div>
                </div>
            </div>
        </div>
        );
    };

export default MovieList;
