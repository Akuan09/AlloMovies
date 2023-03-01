import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';

class Directors extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            directors: [],
            popup: "",
            message: ""
        }
        this.getAll();
    }

    getAll(){
        axios.get("http://localhost:3001/directors")
        .then((res)=>{
            this.setState({directors: res.data});
        })
        .catch((err)=>{console.log(err.message);});
    }

    printPopUp = (e)=>{
        this.setState({popup: 
        <div className="modal">
            <h3>Supprimer le directeur ?</h3>
            <button id={e.target.id} onClick={this.deleteOne}>Oui</button>
            <button onClick={this.deletePopUp}>Non</button>  
        </div>
        })
    }

    deleteOne = (e)=>{
        axios.delete(`http://localhost:3001/directors/${e.target.id}`)
        .then((res)=>{this.setState({message: "Movie Delete"});})
        .catch((err)=>{console.log(err.message);});
        this.deletePopUp();
    }

    deletePopUp = ()=>{
        this.setState({popup: ""});
    }

    render(){
        const directors = this.state.directors.map((director,index)=>{
            return (
                <div key={index} className="movieDiv">
                    <h3 className="titleMovie">{director.name_director}</h3>
                    <div>
                        <Link to={`/directors/details/${director.id_director}`}><button className='btnMovie pointer'>Details</button></Link>
                        <Link to={`/directors/edit/${director.id_director}`}><button className='btnMovie pointer'>Edit</button></Link>
                        <button id={director.id_director} onClick={this.printPopUp} className='btnMovie pointer'>Delete</button>
                    </div>
                </div>
            );
        });
        return (
            <>
                <h1 className='sub_title'>Directors</h1>
                {this.state.message}
                <Link to="/directors/add" className='add'><button className='btnAdd pointer'>Add New</button></Link>
                {directors}
                {this.state.popup}
            </>
        );
    }
}

export default Directors;
  