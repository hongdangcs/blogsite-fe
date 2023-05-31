import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

type Post = {
    id: string;
    title: string;
    userID: string;
    content: string;
    date_create: string;
    date_update: string;
    categories: string[]; // Array of strings
    approved: string;
};

type User = {
    ID: string;
    Name: string;
    Email: string;
    Password: string;
    UserName: string;
    ProfilePic: string;
    Bio: string;
    SocialMedia: string;
};


const BlogPost = () => {

        const {id} = useParams();
        const [post, setPost] = useState<Post | null>(null);
        const [authorName, setAuthorName] = useState('');

        useEffect(() => {
            fetch(`http://localhost:8000/api/post/${id}/`)
                .then(response => response.json())
                .then(data => {
                    setPost(data);
                    console.log(data);
                    const authorID = data.userID;
                    console.log('author: ' + authorID);

                    fetch(`http://localhost:8000/api/user/id/${authorID}/`)
                        .then((response) => response.json())
                        .then((userData: User) => {
                            setAuthorName(userData.Name);
                        })
                        .catch((error) => console.log(error));
                })
                .catch(error => console.log(error));
        }, [id]);


        if (!post) {

            return <div>Loading...</div>;
        }

        const {title, userID, content, date_create, categories} = post;


        return (
            <div className="center-screen">
                <div className="post page-body">
                    <div className="main-section">
                        <div className="detail header__top-flex">
                            {categories ? (
                                categories.map((category, index) => (
                                    <span key={index} className="header__top-left">        {category}, &nbsp;      </span>
                                ))
                            ) : (
                                <span></span>
                            )}
                            <p className="header__top-right">{date_create}</p>
                        </div>
                        <div className="title"><h1>{title}</h1>
                        </div>
                        <div className="author bottom-line-div"><p><i>{authorName}</i></p></div>
                        <div className="content" dangerouslySetInnerHTML={{ __html: content }}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
;

export default BlogPost;
