import React, { Component } from 'react';

const MovieCreate = props => {
    return (
        <div className="movie-form-container">
            <h2>Add a New Movie to the List:</h2>
            <form>
                <input
                name="id"
                value={props.id}
                onChange={props.handleChanges}
                placeholder="Movie id"
                />
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
                <button>Add Movie</button>
            </form>
        </div>
    )
};

export default MovieCreate;