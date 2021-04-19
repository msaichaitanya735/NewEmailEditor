import React, { useRef, useState } from 'react'
import { Route } from 'react-router'
import {BrowserRouter as Router, Switch,Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Module from './module'

class Templatelist extends React.Component{
    state={
        temps:[],
        modalShow:false
    }
    async componentDidMount(){
        const res = await fetch('http://localhost:5000/api/posts');
        const data = await res.json();
        this.setState({
            temps:data
        })
        console.log(this.state.temps)

    }

    render(){

        return(
            <div style={{display:'grid',gridTemplateColumns : 'repeat(3, 1fr)',gridGap: '20px', alignItems: 'stretch', marginTop:'10px'}}>

            {
                this.state.temps.map((design,i)=>{
                    return(
                        <div  className="card" style={{width:"18rem",border:"black solid 1px",borderRadius:'15px',  boxShadow: '0px 0px 10px 0.8px #ece4e4'}}>
                            <div className="card-body" style={{textAlign:"center"}}>
                                <h5 className="card-title">Template {i+1} </h5>
                                <h6 className="card-subtitle mb-2 text-muted">Data</h6> 
                                <Router>
                                    <Link to="/tempeditor"><Button>Edit</Button></Link>
                                    <Route path="/tempeditor">
                                    <Module id={i} key={design}/>
                                    </Route>
                                </Router>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        )
    }

}

export default Templatelist;