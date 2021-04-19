import axios from 'axios';
import React,{useRef} from 'react'
import EmailEditor from 'react-email-editor'

class TemplateEditor extends React.Component {
    constructor(props) {
        super(props);
        this.emailEditorRef = React.createRef();
        this.state={
            temps:[],
            x:[]
        }
      }

      async componentDidMount(){
        const res = await fetch('http://localhost:5000/api/posts');
        const data = await res.json();
        this.setState({
            temps:data[this.props.id]
        })
        console.log(this.state.temps) 
    } 
     

    render(){
    const saveDesign=()=>{
        console.log(this.emailEditorRef.current)
        this.emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
          });
        this.emailEditorRef.current.saveDesign((design) => {
            console.log('saveDesign', design);
            const newTemp = { title :JSON.stringify(design) };
            console.log('stringified',newTemp.title)
            console.log('id:',this.state.temps._id)
            axios.put(`http://localhost:5000/api/post?id=${this.state.temps._id}`,newTemp);
          })       
    }
        return(
            <div>



<EmailEditor ref={this.emailEditorRef} onLoad={()=>{
                console.log(this.props.id)
                if(this.editor!==undefined){
                    this.emailEditorRef.current.loadDesign(JSON.parse(this.state.temps.title));
                    }else{
                        console.log('biscuit')
                        setTimeout (() =>this.emailEditorRef.current.loadDesign(JSON.parse(this.state.temps.title)), 1000);
                    }
                
            }} />
        {console.log('in tempeditor id is',this.props.id)}
        <button onClick={saveDesign} style={{backgroundColor:'#222222',color:'white',marginLeft:"45%"}}>Save Template</button>
        </div>
        )
    }
}

export default TemplateEditor;