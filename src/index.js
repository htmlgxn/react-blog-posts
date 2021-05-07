import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './img/profile1.jpg';
import profile2 from './img/profile2.jpg';
import profile3 from './img/profile3.jpg';

const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment 
                name='Sarah' 
                date='Today at 5:00PM' 
                avatar={profile1}
                text="It's amazing!"
            />
            <SingleComment 
                name='Alex' 
                date='Today at 6:00PM' 
                avatar={profile2}
                text="Great job"
            />
            <SingleComment 
                name='Jack' 
                date='Today at 7:00PM' 
                avatar={profile3}
                text="Thanks..."
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)