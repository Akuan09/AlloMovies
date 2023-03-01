import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            popup: "",
            message: ""
        }
        this.getAll();
    }

    getAll(){
        axios.get("http://localhost:3001/categories")
        .then((res)=>{
            this.setState({categories: res.data});
        })
        .catch((err)=>{console.log(err.message);});
    }

    printPopUp = (e)=>{
        this.setState({popup: 
        <div className="modal">
            <h3>Supprimer la catégorie ?</h3>
            <button id={e.target.id} onClick={this.deleteOne}>Oui</button>
            <button onClick={this.deletePopUp}>Non</button>    
        </div>
        })
    }

    deleteOne = (e)=>{
        axios.delete(`http://localhost:3001/categories/${e.target.id}`)
        .then((res)=>{this.setState({message: "Category Delete"});})
        .catch((err)=>{console.log(err.message);});
        this.deletePopUp();
    }

    deletePopUp = ()=>{
        this.setState({popup: ""});
    }

    render(){
        const categories = this.state.categories.map((category,index)=>{
            return (
                <div key={index} className="movieDiv">
                    <h3 className="titleMovie">{category.name_category}</h3>
                    <div className="btnPanel">
                        <Link to={`/categories/edit/${category.id_category}`}><button className='btnMovie pointer'>Edit</button></Link>
                        <button id={category.id_category} onClick={this.printPopUp} className='btnMovie pointer'>Delete</button>
                    </div>
                </div>
            );
        });
        return (
            <>
                <h1 className='sub_title'>Categories</h1>
                {this.state.message}
                <Link to="/categories/add" className='add'><button className='btnAdd pointer'>Add New</button></Link>
                {categories}
                {this.state.popup}
            </>
        );
    }
}

export default Categories;
