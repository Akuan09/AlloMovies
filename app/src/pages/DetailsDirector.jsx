import React from 'react';
import withRouter from '../components/WithRouter';
import Requests from '../components/Requests';

class DetailsDirector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            director: [],
            id: this.props.params.id
        }
        this.getDirector();
    }

    getDirector(){
        const getDir = new Requests({id: this.state.id});
        let dir = getDir.getOneD();
        dir.then((res)=>{
            this.setState({director: res})
        })
    }

    render(){
        const printDirector = this.state.director.map((dir,idx)=>{
            const birth = new Date(dir.birth_director)
            return (
                <div key={idx} className="detailsDirector">
                    <img src={dir.pic_director} alt='director picture' className='imgDirector'/>
                    <div className='infosDir'>
                        <h3>Name: {dir.name_director}</h3>
                        <h4>Birth: {`${birth.getDate()}/${birth.getMonth()+1}/${birth.getFullYear()}`}</h4>
                    </div>
                </div>
            )
        })
        return (
        <>
            <h1 className="sub_title">Details Director</h1>
            {printDirector}
        </>
        );
    }
};

export default withRouter(DetailsDirector);