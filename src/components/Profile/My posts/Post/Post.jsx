import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            {props.message}
            <div>
               <div>
                 { props.likes}
                </div>
            </div>
        </div>
    )
}

export default Post; 