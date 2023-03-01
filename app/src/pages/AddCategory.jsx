import React from 'react';

class AddCategory extends React.Component{
    state = {
        name_category: ""
    }

    sendData = async function(e){
        e.preventDefault();
        const res = await fetch("http://localhost:3001/categories/",{
            method : "POST",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(this.state)
        });
        const jsonRes = await res.json();
    }

    render(){
        return (
        <>
        <h1 className='sub_title'>Add Category</h1>
        <form onSubmit={this.sendData.bind(this)} className='movieDiv'>
            <input type="text" name="name" placeholder="Name" value={this.state.name_category} onChange={(e)=>this.setState({name_category: e.target.value})} /><br></br>
            <input type="submit" value="Add New Category" className='pointer' />
        </form>
        </>
        );
    }
};

export default AddCategory;