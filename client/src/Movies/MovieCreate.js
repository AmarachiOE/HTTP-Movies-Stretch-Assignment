import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MovieCreate = props => {
    return (
        <div className="movie-form-container">
            <h2>Add a New Movie to the List:</h2>
            <form className="movie-form">
                <input
                name="title"
                value={props.title}
                onChange={props.handleChanges}
                placeholder="Movie title"
                />
                <input
                name="director"
                value={props.director}
                onChange={props.handleChanges}
                placeholder="Director's name"
                />
                <input
                name="metascore"
                value={props.metascore}
                onChange={props.handleChanges}
                placeholder="Metascore"
                />
                <input
                name="stars"
                value={props.stars}
                onChange={props.handleChanges}
                placeholder="Starring..."
                />
                <button className="movie-form-button">Add Movie</button>
            </form>
        </div>
    )
};

export default MovieCreate;