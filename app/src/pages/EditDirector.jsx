import React from 'react';
import withRouter from '../components/WithRouter';
import Requests from '../components/Requests';

class EditDirector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name_director: "",
            birth_director: "",
            pic_director: "",
            id: this.props.params.id
        }
        this.getDirector();
    }

    getDirector(){
        const getDirectors = new Requests({id: this.state.id});
        let directors = getDirectors.getOneD();
        directors.then((res)=>{
            this.setState({name_director: res[0].name_director});
            this.setState({birth_director: res[0].birth_director});
            this.setState({pic_director: res[0].pic_director});
        });
    }

    sendData = async function(e){
        e.preventDefault();
        const data = {
            name_director: this.state.name_director,
            birth_director: this.state.birth_director,
            pic_director: this.state.pic_director
        }
        const res = await fetch("http://localhost:3001/directors/"+this.state.id,{
            method : "PUT",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(data)
        });
        const jsonRes = await res.json();
    }

    render (){
        return (
        <>
            <h1 className='sub_title'>Edit Director</h1>
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

export default withRouter(EditDirector);