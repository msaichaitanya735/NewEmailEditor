import React,{useState} from 'react'
import Modal from 'react-modal'
import {Button} from 'react-bootstrap'
import TemplateEditor from './templateeditor'
import { Link } from 'react-router-dom'

const Module=(props)=>{
    const [modalShow,setModalShow]=useState(true)
    return(
        <Modal 
            isOpen={modalShow}
            aria={{
                labelledby: "heading",
                describedby: "full_description"
            }}>
            <h1 id="heading">Template Editor</h1>
            <div id="full_description">
            <TemplateEditor id={props.id}/>
            <Link to = "/templateslist">
                <Button onClick={()=>setModalShow(false)} style={{color:'white',marginTop:"10px",marginLeft:"46%"}}>Close</Button>
            </Link>
            </div>
            </Modal>
    ) 
}
export default Module