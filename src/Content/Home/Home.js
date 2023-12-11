import Button from '../../component/Button/Button';
import './Home.css';
import React, { forwardRef, useEffect, useRef } from 'react';
import { init } from 'ityped';

const Home = forwardRef((props, ref) => {
    const textRedref = useRef();
    useEffect(() => {
        init(textRedref.current, { showCursor: false, backDelay: 500, strings: ['Front end Developer', 'Freelancer'] });
    }, []);

    return (
        <div className="Home" ref={ref}>
            <div className="Home_List">
                <div className="Home_Items">
                    <p>Hello, I'm</p>
                    <p>
                        a <span ref={textRedref}></span>
                    </p>
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
