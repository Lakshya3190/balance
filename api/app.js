const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { request, response } = require('express');
const bcrypt = require('bcrypt-nodejs')


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        database: 'mom_site'
    }
});

const app = express()

app.use(express.json());
app.use(cors());

app.post('/addBlog', (req, res) => {

    const {blogTitle, blog}  = req.body;
    const today = new Date().toISOString();
    const today_date = today.slice(0,10);

    console.log(blogTitle)
    console.log(blog)

    db('blog')
    .insert({
        blog_title: blogTitle,
        blog: blog,
        entrydate: today_date
    })
    .returning('*')
    .then(blogData => res.json(blogData))   
    .catch(updateData => {
        db('blog')
        .update({
            blog: blog
        })
        .where({
            entrydate: today_date,
            blog_title: blogTitle
        })
        .returning('blog')
        .then(updateBlog => res.json(updateBlog))
        .catch(err => res.json("No Data Exists"))
    })

})

app.post('/findBlog', (req, res) => {

    const {blogTitle, blog}  = req.body;
    const today = new Date().toISOString();
    const today_date = today.slice(0,10);

    console.log(blogTitle)
    console.log(blog)

    db('blog')
    .insert({
        blog_title: blogTitle
    })
    .returning('*')
    .then(blogData => res.json(blogData))   
    .catch(updateData => {
        db('blog')
        .update({
            blog: blog
        })
        .where({
            entrydate: today_date,
            blog_title: blogTitle
        })
        .returning('blog')
        .then(updateBlog => res.json(updateBlog))
        .catch(err => res.json("No Data Exists"))
    })

})

app.post('/allBlog', (req, res) => {

    db('blog')
    .select('*')
    .returning('*')
    .then(blogData => res.json(blogData))   
    .catch(err => res.json(err))

})

app.listen(3005, () => {
  console.log('The server is running on post 3005');
})