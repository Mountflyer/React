import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {
    debugger;
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
                New post
            </div>
            <div className={s.posts}>
               <Post message = 'Hi, how are you?'/>
               <Post likes = '43 Likes'/>
               <Post message = 'Its my first post'/>
               <Post likes = '59 Likes'/>
            </div>
        </div >
    )
}

export default Myposts;