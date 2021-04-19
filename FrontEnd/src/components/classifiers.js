import React from 'react'
import { Button } from 'react-bootstrap';
import {Nav,Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Editors from './editor'
import Templateslist from './templatelist'


const Classifier=()=>{
    return(
            <Router>
                <Nav style={{justify_content:' center'}}>
                    <div style={{display:'flex',  justifyContent:'center',border:'solid 1px white',flex:'wrap'}}>
                        <Link to="/editor" style={{flex:"1"}} >
                        <Button style={{width:"100%",border:'solid 1px white'}}>Create Template</Button>
                        </Link>
                
                        <Link to="/templateslist" style={{flex:"1"}}>
                        <Button style={{width:"100%",border:'solid 1px white'}}>Templates</Button>
                        </Link>
                    </div>
                <Switch>
                    <Route path="/editor">
                        <Editors/>
                    </Route>
                    <Route path="/templateslist">
                        <Templateslist/>
                    </Route>
                </Switch>
                </Nav>
            </Router>  
    )
}
export default Classifier;
