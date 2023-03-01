import React from 'react';
import withRouter from '../components/WithRouter';
import Requests from '../components/Requests';

class EditMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title_movie: "",
            duration_movie: "",
            year_movie: "",
            synopsis_movie: "",
            director_movie: "",
            directors: [],
            id: this.props.params.id
        }
        this.getMovie();
        this.getDirectors();
    }

    getMovie(){
        const getMovie = new Requests({id: this.state.id});
        let movie = getMovie.getOneM();
        movie.then((res)=>{
            this.setState({title_movie: res[0].title_movie});
            this.setState({duration_movie: res[0].duration_movie});
            this.setState({year_movie: res[0].year_movie});
            this.setState({synopsis_movie: res[0].synopsis_movie});
            this.setState({director_movie: res[0].director_movie});
        });
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
        const res = await fetch("http://localhost:3001/movies/"+this.state.id,{
            method : "PUT",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(data)
        });
        const jsonRes = await res.json();
    }

    render (){
        const printDirectors = this.state.directors.map((director,key)=>{
            return <option key={key} value={director.id_director}>{director.name_director}</option>
        })
        return (
        <>
            <h1 className='sub_title'>Edit Movie</h1>
            <form onSubmit={this.sendData.bind(this)} className='movieDiv'>
                <input type="text" name="title" value={this.state.title_movie} onChange={(e)=>this.setState({title_movie: e.target.value})} required /><br></br>
                <input type="number" name="duration" value={this.state.duration_movie} onChange={(e)=>this.setState({duration_movie: e.target.value})} required /><br></br>
                <input type="number" name="year" value={this.state.year_movie} onChange={(e)=>this.setState({year_movie: e.target.value})} required /><br></br>
                {/* <GetDirector id={movie.director_movie} /> */}
                <select name='director' value={this.state.director_movie} onChange={(e)=>this.setState({director_movie: e.target.value})} className='pointer'>
                    {printDirectors}
                </select><br></br>
                <textarea name="synopsis" cols="30" rows="10" value={this.state.synopsis_movie} onChange={(e)=>this.setState({synopsis_movie: e.target.value})} required></textarea><br></br>
                <input type="submit" value="Edit" className='pointer' />
            </form>
        </>
        );
    }
};

export default withRouter(EditMovie);