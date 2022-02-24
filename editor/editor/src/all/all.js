import React from 'react';
import './all.css';
import BlogCard from './blogCard/blogCard.js';

class allBlogs extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log("All blog data loolol", this.props.allblogs)
        const cards = this.props.allblogs.map(
            (user,i) => {
                return (
                    <BlogCard 
                    key = {i}
                    title = {this.props.allblogs[i].blog_title}
                    data = {this.props.allblogs[i].blog}
                    entry_date = {this.props.allblogs[i].entrydate}
                    />
                );
            })
            
        return(
            <div className = 'allBlogs'>
                <div className = 'allblogs-title'>
                    Blogs
                </div>
                <div className = 'blog-card'>
                    {cards}
                </div>
            </div>
        );
    }
}

export default allBlogs;