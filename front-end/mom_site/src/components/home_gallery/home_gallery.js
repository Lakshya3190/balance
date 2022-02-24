import React from 'react';
import './home_gallery.css';
import paint1 from './paintings/paint1.jfif'
import paint2 from './paintings/paint2.jfif'
import paint3 from './paintings/paint3.jfif'
import paint4 from './paintings/paint4.jfif'
import paint5 from './paintings/paint5.jfif'
import paint6 from './paintings/paint6.jfif'
import 'tachyons'

class home_gallery extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'home_gallery'>

                <div className = 'quote'>
                    " In balance, there is <b>peace.</b> In peace, is the power of <b>creativity.</b>"
                </div>

                <div className = 'gallery'>
                    <img alt = "" className = 'paintings pointer' src = {paint1}/>
                    <img alt = "" className = 'paintings pointer' src = {paint2}/>
                    <img alt = "" className = 'paintings pointer' src = {paint3}/>
                    <img alt = "" className = 'paintings pointer' src = {paint4}/>
                    <img alt = "" className = 'paintings pointer' src = {paint5}/>
                    <img alt = "" className = 'paintings pointer' src = {paint6}/>
                </div>


                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/>
            </div>
        );
    }
}

export default home_gallery;