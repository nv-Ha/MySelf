import './TopBar.css';
import React, { useState } from 'react';

function Topbar({ scrollRef }) {
    const [selectedButton, setSelectedButton] = useState('Home');

    const handleClick = (targetRef, buttonName) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
        setSelectedButton(buttonName);
        console.log(selectedButton);
    };

    // ...

    return (
        <div className="TopBar">
            <div className="TopBar_List">
                {/* - */}
                <div className="TopBar_Items">
                    <p>My</p>
                    <p>Self</p>
                </div>
                {/* - */}
                <div className="TopBar_Items">
                    <div className="TopBar_Items_List">
                        <button
                            className={selectedButton === 'Home' ? 'ChooseColor' : ''}
                            onClick={() => handleClick(scrollRef.home, 'Home')}
                        >
                            Home
                        </button>

                        <button
                            className={selectedButton === 'About' ? 'ChooseColor' : ''}
                            onClick={() => handleClick(scrollRef.about, 'About')}
                        >
                            About
                        </button>
                        <button
                            className={selectedButton === 'Skills' ? 'ChooseColor' : ''}
                            onClick={() => handleClick(scrollRef.skills, 'Skills')}
                        >
                            Skills
                        </button>
                        <button
                            className={selectedButton === 'Blog' ? 'ChooseColor' : ''}
                            onClick={() => handleClick(scrollRef.blog, 'Blog')}
                        >
                            Blog
                        </button>
                        <button
                            className={selectedButton === 'Contact' ? 'ChooseColor' : ''}
                            onClick={() => handleClick(scrollRef.contact, 'Contact')}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
