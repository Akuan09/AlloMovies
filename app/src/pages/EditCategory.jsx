import React from 'react';
import withRouter from '../components/WithRouter';
import Requests from '../components/Requests';

class EditCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name_category: "",
            id: this.props.params.id
        }
        this.getCategory();
    }

    getCategory(){
        const getCategory = new Requests({id: this.state.id});
        let category = getCategory.getOneC();
        category.then((res)=>{
            this.setState({name_category: res[0].name_category});
        });
    }

    sendData = async function(e){
        e.preventDefault();
        const data = {
            name_category: this.state.name_category,
        }
        const res = await fetch("http://localhost:3001/categories/"+this.state.id,{
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
                <input type="text" name="name" value={this.state.name_category} onChange={(e)=>this.setState({name_category: e.target.value})} required /><br></br>
                <input type="submit" value="Edit" className='pointer'/>
            </form>
        </>
        );
    }
};

export default withRouter(EditCategory);