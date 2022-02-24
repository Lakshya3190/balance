import React from 'react';
import './new.css';
import EditorJs from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";

class newBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {},
            saveData: {},
            title: ""
        }
    }

    render(){
        return(
            <div className = 'newBlog'>

            <div className = 'editor-title'>
                Editor
            </div>
            
            <p className = 'textbox-title'>Title:</p><br/>
            <input className = 'textbox-input' name = "" onChange = {this.onTitleChange}/>
            
            <p className = 'textbox-title'>Blog:</p><br/>
            
            <EditorJs
                tools={EDITOR_JS_TOOLS}f
                data= {this.state.data.blog}
                autofocus = 'true'
                placeholder = 'Let`s write an awesome story!'
                enableReInitialize={true}
                instanceRef={instance => this.editorInstance = instance}
                onChange={async () => {
                    try {
                        const mydata = await this.editorInstance.save()
                        .then((mydata) => {
                            console.log("Title is:", this.state.title)
                            console.log("Data is", mydata)
                            fetch('http://localhost:3005/findBlog', {
                                method: 'post',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    blogTitle: this.state.title,
                                    blog: mydata
                                })
                                })
                                .then(console.log("Data being sent:", mydata))
                                .then((response => response.json()))
                                .then(response => {
                                    console.log(response)
                                })  
                                .catch(err => console.log("Editor Error:", err)) 
                        })
                        console.log('Data sent successfully')
                    } catch (error) {
                        console.error("Failed to save the new data")
                    }
                }} 
            />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/>

            </div>
        );
    }
}

export default newBlog;