import React from 'react';
import './blogCard.css';
import EditorJs from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";


class blogCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogRoute: 'list',
            data: {},
            saveData: {},
        }
    }

    onShowBlog = () => {
            fetch('http://localhost:3005/addBlog', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    blogTitle: this.state.title,
                    blog: this.state.data
                })
                })
                .then((response => response.json()))
                .then(data => {
                    this.setState(Object.assign(this.state.data, {data: data}))
                })   
                .catch(err => console.log("Editor Error:", err))
        
    }

    render(){
        return(
            <div className = 'blogCard'>
                <div onClick = {this.onShowBlog()} className = 'card-title'>
                    {this.props.title}
                </div>


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
                            fetch('http://localhost:3005/addBlog', {
                                method: 'post',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    blogTitle: this.props.title,
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
                
            </div>
        );
    }
}

export default blogCard;