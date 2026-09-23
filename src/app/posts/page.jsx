import React from 'react';

// const postPromise = async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();

//     return posts;
// }


const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const getPost2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    } catch(error){
        throw new error('Faild to fetch post data')
    }
}

const PostPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    // const posts = await res.json();

    // const posts = await postPromise()

    const posts = await getPost()


    return (
        <div>
            <h2>Hellow Posts: {posts.length}</h2>
        </div>
    );
};

export default PostPage;