import React from 'react';

class AddDirector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name_director: "",
            birth_director: "",
            pic_director: "",
        }
    }

    sendData = async function(e){
        e.preventDefault();
        const data = {
            name_director: this.state.name_director,
            birth_director: this.state.birth_director,
            pic_director: this.state.pic_director
        }
        const res = await fetch("http://localhost:3001/directors/",{
            method : "POST",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(data)
        });
        const jsonRes = await res.json();
    }

    render (){
        return (
        <>
            <h1 className='sub_title'>Add Director</h1>
            <form onSubmit={this.sendData.bind(this)} className='movieDiv'>
                <input type="text" name="name" value={this.state.name_director} onChange={(e)=>this.setState({name_director: e.target.value})} required /><br></br>
                <input type="date" name="birth" value={this.state.birth_director} onChange={(e)=>this.setState({birth_director: e.target.value})} className='pointer' required /><br></br>
                <input type="text" name="pic" value={this.state.pic_director} onChange={(e)=>this.setState({pic_director: e.target.value})} required /><br></br>
                <input type="submit" value="Edit" className='pointer'/>
            </form>
        </>
        );
    }
};

export default AddDirector;