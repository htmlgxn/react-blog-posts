import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './img/profile1.jpg'
import profile2 from './img/profile2.jpg'
import profile3 from './img/profile3.jpg'

const App = () => {
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={profile1} alt="profile picture" />
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Sarah
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing!
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={profile2} alt="profile picture" />
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Bob
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing!
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={profile3} alt="profile picture" />
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Yakob
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            Today at 7:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing!
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)