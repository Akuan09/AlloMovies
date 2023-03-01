import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';

class Movies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            popup: "",
            message: ""
        }
        this.getAll();
    }

    getAll(){
        axios.get("http://localhost:3001/movies")
        .then((res)=>{
            this.setState({movies: res.data});
        })
        .catch((err)=>{console.log(err.message);});
    }

    printPopUp = (e)=>{
        this.setState({popup: 
        <div className="modal">
            <h3>Supprimer le film ?</h3>
            <button id={e.target.id} onClick={this.deleteOne}>Oui</button>
            <button onClick={this.deletePopUp}>Non</button>    
        </div>
        })
    }

    deleteOne = (e)=>{
        axios.delete(`http://localhost:3001/movies/${e.target.id}`)
        .then((res)=>{this.setState({message: "Movie Delete"});})
        .catch((err)=>{console.log(err.message);});
        this.deletePopUp();
    }

    deletePopUp = ()=>{
        this.setState({popup: ""});
    }

    render(){
        const movies = this.state.movies.map((movie,index)=>{
            return (
                <div key={index} className="movieDiv">
                    <h3 className="titleMovie">{movie.title_movie}</h3>
                    <div className="btnPanel">
                        <Link to={`/movies/details/${movie.id_movie}`}><button className='btnMovie pointer'>Details</button></Link>
                        <Link to={`/movies/edit/${movie.id_movie}`}><button className='btnMovie pointer'>Edit</button></Link>
                        <button id={movie.id_movie} onClick={this.printPopUp} className='btnMovie pointer'>Delete</button>
                    </div>
                </div>
            );
        });
        return (
            <>
                <h1 className='sub_title'>Movies</h1>
                {this.state.message}
                <Link to="/movies/add" className='add'><button className='btnAdd pointer'>Add New</button></Link>
                {movies}
                {this.state.popup}
            </>
        );
    }
}

export default Movies;
  