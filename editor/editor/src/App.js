import React from 'react';
import './App.css';
import All from './all/all.js';
import New from './new/new.js';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          data: {},
          allblogs: [],
          saveData: {},
          title: "",
          route: "New"
      }
  }

  onNewRouteChange = () => {
    this.setState({route: "New"})
  }

  onAllRouteChange = () => {
    this.setState({route: "All"})
  }

  onTitleChange = (event) => {
    this.setState({title: event.target.value})
  }

  onEditorOpen = () => {
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

  onAllBlogsOpen = () => {
    fetch('http://localhost:3005/allBlog', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        })
        })
        .then((response => response.json()))
        .then(allblogs => {
            this.setState(Object.assign(this.state.allblogs, {allblogs: allblogs}))
        })   
        .catch(err => console.log("Editor Error:", err))

  }

  componentDidMount = () => {
      this.onEditorOpen();
      this.onAllBlogsOpen();
      console.log("All Blogs:",this.state.allblogs)
  }



  render(){
      console.log(this.state.data)
      return(
          <div className = 'App'>

            <div className = 'menu' style = {{display: 'flex', justifyContent: 'center'}}>
                <div onClick = {this.onNewRouteChange} className = 'menu-op'> New Blog</div>
                <div onClick = {() => {this.onAllRouteChange(); this.onAllBlogsOpen()}} className = 'menu-op'>All Blogs</div>
                
            </div>

            {
                this.state.route === "New"
                ? <New/>
                : (
                    this.state.route === "All"
                    ? <All allblogs = {this.state.allblogs}/>
                    : null
                )
            }

            

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/>
          </div>

      );
  }
}

export default App;
