CREATE TABLE blog(
    sno SERIAL PRIMARY KEY,
    entrydate DATE NOT NULL,
    blog_title VARCHAR(1000) NOT NULL UNIQUE,
    blog JSON  
);