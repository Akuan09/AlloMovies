import React from 'react';
import withRouter from '../components/WithRouter';
import Requests from "../components/Requests";


class DetailsMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movie: [],
            categories: [],
            director: [],
            id: this.props.params.id
        }
        this.getMovie();
        this.getCategories();
        this.getDirector();
    }

    getMovie(){
        const getMovie = new Requests({id: this.state.id});
        let movie = getMovie.getOneM();
        movie.then((res)=>{
            this.setState({movie: res});
        });
    }

    getCategories(){
        const getCat = new Requests({id: this.state.id});
        let cat = getCat.getOneMC();
        cat.then((res)=>{
            this.setState({categories: res});
        });
    }

    getDirector(){
        const getDir = new Requests({id: this.state.id});
        let dir = getDir.getOneD();
        dir.then((res)=>{
            this.setState({director: res})
        })
    }

    render(){
        const printCat = this.state.categories.map((movieCat,idx)=>{
            return (
                <li key={idx}>
                    {movieCat.name_category}
                </li>
            )
        })
        const printDirector = this.state.director.map((dir,idx)=>{
            return (
                <h4 key={idx}>Director: {dir.name_director}</h4>
            )
        })
        const printMovie = this.state.movie.map((movie,idx)=>{
            return (
                <div key={idx} className="detailsMovie">
                    <h2>Title: {movie.title_movie}</h2>
                    {printDirector}
                    <h4>Categories:</h4>
                    {printCat}
                    <h4>Duration: {movie.duration_movie}min</h4>
                    <h4>Release Date: {movie.year_movie}</h4>
                    <h4>Synopsis: {movie.synopsis_movie}</h4>
                </div>
            )
        })
        return (
        <>
            <h1 className="sub_title">Details Movie</h1>
            {printMovie}
        </>
        );
    }
};

export default withRouter(DetailsMovie);
  