import React, {useState} from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

const categories = ['Programming', 'Data Science', 'Technology', 'Self Improvement', 'Relationships', 'Productivity'];
const Write = () => {

    let user = '';
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('access_token=')) {
            user = decodeURIComponent(cookie.substring('access_token='.length));
        }
    }

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleEditorChange = (event: any, editor: any) => {
        const data = editor.getData();
        setContent(data);
    };
    const handleTitleChange = (event:any) => {
        setTitle(event.target.value);
    };
    const handleCategoryChange = (e:any) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories((prevCategories) => [...prevCategories, value]);
        } else {
            setSelectedCategories((prevCategories) =>
                prevCategories.filter((category) => category !== value)
            );
        }
        console.log(selectedCategories);
    };

    const handleSubmit = () => {

        fetch('http://localhost:8000/api/post/new', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'title='+title+'&content='+content+'&categories='+selectedCategories
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert(data)
            })
            .catch(error => {
                console.error(error);
            });
        window.location.href = '/';

    };


    return (
        <div className=" center-screen">
            <div className='page-body'>
            <h1>Create Blog Post</h1>
            <label>Title:</label><br/>
            <input type="text" value={title} onChange={handleTitleChange} />
            <br />
            <label>Content:</label>

            <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={handleEditorChange}
            />
                <label>Select Categories:</label>
                {categories.map((category) => (
                    <div key={category}>
                        <input
                            type="checkbox"
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={handleCategoryChange}
                        />
                        <span>{category}</span>
                    </div>
                ))}
            <button onClick={handleSubmit}>Submit</button>
        </div></div>
    );
};

export default Write;