import axios from 'axios';
import React from 'react';

class Requests extends React.Component{
    constructor(props){
        super(props);
    }

    getOneM = async function(){
        let movie;
        await axios.get("http://localhost:3001/movies/"+this.props.id)
        .then((res)=>{movie =  res.data;})
        .catch((err)=>{console.log(err.message);});
        return movie;
    }

    getAllD = async function(){
        let directors;
        await axios.get("http://localhost:3001/directors")
        .then((res)=>{directors =  res.data;})
        .catch((err)=>{console.log(err.message);});
        return directors;
    }

    getOneD = async function(){
        let director;
        await axios.get("http://localhost:3001/directors/"+this.props.id)
        .then((res)=>{director = res.data;})
        .catch((err)=>{console.log(err.message);});
        return director;
    }

    getOneMC = async function(){
        let mc;
        await axios.get("http://localhost:3001/movies_categories/"+this.props.id)
        .then((res)=>{mc = res.data;})
        .catch((err)=>{console.log(err.message);});
        return mc;
    }

    getOneC = async function(){
        let category;
        await axios.get("http://localhost:3001/categories/"+this.props.id)
        .then((res)=>{category = res.data;})
        .catch((err)=>{console.log(err)});
        return category;
    }
}

export default Requests;