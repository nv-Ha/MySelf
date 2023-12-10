import Button from '../../component/Button/Button';
import './Home.css';
import React, { forwardRef } from 'react';

const Home = forwardRef((props, ref) => {
    return (
        <div className="Home" ref={ref}>
            <div className="Home_List">
                <div className="Home_Items">
                    <p>Hello, I'm</p>
                    <p>a Front end Developer</p>
                </div>
                <div className="Home_Items">
                    <p className="Home_Items_Text">
                        Responsible for developing the external interface of a website based on designs. Those website
                        interfaces will be seen first by users when accessing the website through the browser.
                    </p>
                </div>
                <Button Btn_text="Read More" className="Home_Btn" />
            </div>
        </div>
    );
});

export default Home;
