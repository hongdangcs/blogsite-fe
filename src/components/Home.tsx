import React, {useEffect, useState} from 'react';

interface BlogPost {
    title: string;
    content: string;
    time: string;
    author: string;
    id: string;
}

const Home = () => {

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    const categories = ['Programming', 'Data Science', 'Technology', 'Self Improvement', 'Relationships', 'Productivity'];
    useEffect(() => {
        fetch('http://localhost:8000/api/post/', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const transformedPosts = data.map((post: any) => ({
                    title: post.title,
                    content: post.content,
                    time: post.date_create,
                    author: post.userID,
                    id: post.id,
                }));
                setBlogPosts(transformedPosts);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="homepage page-body">
            <div className="categories">
                <h2 style={{fontSize: '26px'}}>Discover</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}><a href={`/${category}`}>
                            <div className="category-style">{category}</div>
                        </a></li>
                    ))}
                </ul>
                <a href='#'>Explore more...</a>
            </div>
            <div className="blog-posts">

                {blogPosts.map((post, index) => (
                    <div key={index}>
                    <a href={`/post/${post.id}`}>
                        <button className="blog-post">
                            <h3 style={{fontSize: '24px', fontWeight: '500', textAlign: 'left'}}>{post.title}</h3>
                            <p style={{padding: '15px', textAlign: 'left', fontSize:'18px'}}> <p  dangerouslySetInnerHTML={{ __html: post.content.substring(0, 600) }}></p> <a
                                href='#'>...read
                                more.</a></p>
                            <p style={{fontSize: '14px', fontStyle: 'italic'}}>{post.time}</p>
                        </button>
                    </a></div>

                ))}
            </div>
            <div className="right-home"></div>
        </div>
    );
};

export default Home;