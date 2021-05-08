import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// Component Imports 
import SingleComment from './SingleComment';
import UserCard from './UserCard';
// File Imports
import profile1 from './img/profile1.jpg';
import profile2 from './img/profile2.jpg';
import profile3 from './img/profile3.jpg';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                Hello, my name is Sarah, and I live in Istanbul.
            </UserCard>
            <UserCard>
                <SingleComment 
                    fname='Sarah'
                    lname='Tancredi'
                    date='Today at 5:00PM' 
                    avatar={profile1}
                    text="It's amazing!"
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    fname='Alex'
                    lname='Tancredi'
                    date='Today at 6:00PM' 
                    avatar={profile2}
                    text="Great job"
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    fname='Jack'
                    lname='Tancredi'
                    date='Today at 7:00PM' 
                    avatar={profile3}
                    text="Thanks..."
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)