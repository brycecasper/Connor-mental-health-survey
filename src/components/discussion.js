import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Discussion = props => {
    const [postList, setPostList] = useState([]);
    const [postInput, setPostInput] = useState('');

    useEffect(() => {
        getPost();
    }, [])

    const getPost = () => {
        axios.get('/api/get-post')
        .then(res => setPostList(res.data))
        .catch(err => console.log(err));
    }

    const submitPost = () => {
        axios.post('/api/submit-post', {postInput})
        .then(() => {
            setPostInput('')
            getPost()
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
        <main className='discussion-main'>
            
            <section className='posts'>
            {
                postList.map((e, i) => (
                    <div key={i}>
                        <p>{e.post}</p>
                        <div className='seperate-posts'></div>
                    </div>
                ))
            }
            </section>

            <textarea className='post-input' type='text' value={postInput} onChange={(e) => setPostInput(e.target.value)} />

        </main>
        <button className='post-button' onClick={submitPost}>Post</button>
        </div>
    )
}

export default Discussion;