import React from 'react';
import s from './Profile.module.css';
import Myposts from './My posts/Myposts';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://lp-cms-production.imgix.net/2021-02/Saud_Beach_G.jpg?auto=format&q=75&w=1920'></img>
        </div>
        <div>
            ava + description
        </div>
        <Myposts />
    </div>
}

export default Profile;