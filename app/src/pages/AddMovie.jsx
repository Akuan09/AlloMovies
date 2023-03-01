import React from 'react';
import Requests from '../components/Requests';

class AddMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title_movie: "",
            duration_movie: "",
            year_movie: "",
            synopsis_movie: "",
            director_movie: "",
            directors: []
        }
        this.getDirectors();
    }
    

    getDirectors(){
        const getDirectors = new Requests();
        let directors = getDirectors.getAllD();
        directors.then((res)=>this.setState({directors: res}));
    }

    sendData = async function(e){
        e.preventDefault();
        const data = {
            title_movie: this.state.title_movie,
            duration_movie: this.state.duration_movie,
            year_movie: this.state.year_movie,
            synopsis_movie: this.state.synopsis_movie,
            director_movie: this.state.director_movie
        }
        const res = await fetch("http://localhost:3001/movies/",{
            method : "POST",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(data)
        });
        const jsonRes = await res.json();
    }

    render(){
        const printDirectors = this.state.directors.map((dir,idx)=>{
            return (
                <option key={idx} value={dir.id_director}>{dir.name_director}</option>
            )
        })
        return (
        <>
        <h1 className='sub_title'>Add Movie</h1>
        <form onSubmit={this.sendData.bind(this)} className='movieDiv'>
            <input type="text" name="title" placeholder="Title" value={this.state.title_movie} onChange={(e)=>this.setState({title_movie: e.target.value})} required/><br></br>
            <input type="number" name="duration" placeholder="Duration" value={this.state.duration_movie} onChange={(e)=>this.setState({duration_movie: e.target.value})} required/><br></br>
            <input type="number" name="year" placeholder="Release Date" value={this.state.year_movie} onChange={(e)=>this.setState({year_movie: e.target.value})} required/><br></br>
            <select name='director' value={this.state.director_movie} onChange={(e)=>this.setState({director_movie: e.target.value})} className='pointer'>
                <option value="">--- Select Director ---</option>
                {printDirectors}
            </select><br></br>
            {/* Add select for categories */}
            <textarea name="synopsis" cols="30" rows="10" placeholder="Synopsis" value={this.state.synopsis_movie} onChange={(e)=>this.setState({synopsis_movie: e.target.value})} required></textarea><br></br>
            <input type="submit" value="Add New Movie" className='pointer' />
        </form>
        </>
        );
    }
};

export default AddMovie;