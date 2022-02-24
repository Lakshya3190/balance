import './App.css';
import React from 'react';
import insta from './images/instagram.png'
import contact from './images/contact.png'
import logo from './images/logo.png'
import Home_Gallery from './components/home_gallery/home_gallery.js';
import Blog from './components/blog/blog.js';
import About from './components/about/about.js';
import 'tachyons';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'home'
    }
  }

  onAboutClick = () => {
    this.setState({route: 'about'})
  }

  onBlogClick = () => {
    this.setState({route: 'blog'})
  }

  onLogoClick = () => {
    this.setState({route: 'home'})
  }

  render(){

    return (
      <div className="App">
        <div className = 'nav-bar'>
  
          <div className = 'left-nav' style = {{display: 'flex'}}>
            <p onClick = {this.onAboutClick} className = 'left-nav-op pointer'>About</p>
            <p onClick = {this.onBlogClick} className = 'left-nav-op pointer'>Blog</p>
          </div>
  
          <div className = 'center-nav'>
            <img className = 'pointer' onClick = {this.onLogoClick} alt = "" src = {logo}/>
            <p className = 'name'>Anju Tyagi</p>
          </div>
  
          <div className = 'right-nav' style = {{display: 'flex'}}>
            <img alt = "" className = 'right-nav-img' src = {insta}/>
            <img alt = "" className = 'right-nav-img' src = {insta}/>
            <img alt = "" className = 'right-nav-img' src = {contact}/>
  
          </div>
          
        </div>

        {
          this.state.route === 'home'
          ? <div className = 'home_page_gallery'>
              <Home_Gallery/>
            </div>

          : (
            this.state.route === 'blog'
            ? <div className = 'home_page_blog'>
                <Blog/>
              </div>
            : (
              this.state.route === 'about'
              ? <div className = 'about'>
                  <About/>
                </div>
              : null
            )
          )
        }

        <div className = 'footer'>
        © 2021 <b>Anju Tyagi</b> All Rights Reserved
        </div>
  
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/>
      </div>
    );

  }
}

export default App;
