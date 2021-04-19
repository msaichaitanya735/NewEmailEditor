import React,{useRef} from 'react'
import EmailEditor from 'react-email-editor'
import axios from 'axios'

const Editors=(props)=>{
    const ref=useRef(null)

    const exportHTML=()=>{
        ref.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
          });
    }
    const saveDesign=()=>{
        console.log(ref.current)
        ref.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
          });
        ref.current.saveDesign((design) => {
            console.log('saveDesign', design);
            const newTemp = { title :JSON.stringify(design) };
            console.log('stringified',newTemp.title)
            axios.post('http://localhost:5000/api/posts',newTemp)
          });        
    }

    return(
        <div>
            <EmailEditor ref={ref}/> 
            <div style={{display:"flex", justifyContent:"center"}}>
            <button style={{backgroundColor:'#222222',color:'white'}} onClick={saveDesign}>Save Template</button>
            <button style={{backgroundColor:'#222222',color:'white'}} className="" onClick={exportHTML}>Export HTML</button>
            </div>
        </div>

    )
}

export default Editors;