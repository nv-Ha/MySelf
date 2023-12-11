import React, { forwardRef, useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faLocationDot, faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import LayoutAll from '../../component/LayoutAll/LayoutAll';

const Contact = forwardRef((props, ref) => {
    const [messanger, setMessanger] = useState(false);

    const hangdleMessanger = () => {
        setMessanger(true);
    };

    useEffect(() => {
        if (messanger) {
            const timer = setTimeout(() => {
                setMessanger(false);
            }, 8000);

            return () => clearTimeout(timer);
        }
    }, [messanger]);
    return (
        <div className="Contact" ref={ref}>
            <LayoutAll>
                <div className="Contact_Title">
                    <p>Contact</p>
                    <p> With me</p>
                </div>
                {/* -- */}
                <div className="Contact_Nav">
                    {/* Contact */}
                    <div className="Contact_List">
                        {/* 1 */}
                        <div className="Contact_Items">
                            {/* -- */}
                            <div className="Contact_Circle">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="Contact_Text">
                                <span>
                                    <p className="Contact_Text_Title">Mail&Website</p>
                                    <span className="Contact_Text_Items">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <p>haviet1712@gmail.com</p>
                                    </span>
                                    <span className="Contact_Text_Items">
                                        <FontAwesomeIcon icon={faGlobe} />
                                        <p>www.haviet.com</p>
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="Contact_Items">
                            <div className="Contact_Circle">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="Contact_Text">
                                <span>
                                    <p className="Contact_Text_Title">Contact</p>
                                    <span className="Contact_Text_Items">
                                        <FontAwesomeIcon icon={faMobileScreenButton} />
                                        <p>+84-793330769</p>
                                    </span>
                                    <span className="Contact_Text_Items">
                                        <FontAwesomeIcon icon={faMobileScreenButton} />
                                        <p>+84-345332489</p>
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="Contact_Items">
                            <div className="Contact_Circle">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="Contact_Text">
                                <span>
                                    <p className="Contact_Text_Title">Address</p>
                                    <span className="Contact_Text_Items">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <p>Ha Noi, Viet Nam</p>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* ---input */}
                    <div className="Contact_Input">
                        <input placeholder="Full Name" type="text" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Phone Number" type="number" />
                        <input placeholder="Messanger" type="text" />
                        <div>
                            <button className="Contact_Button" onClick={hangdleMessanger}>
                                Submit
                            </button>
                            {messanger && <p>Thanks for contacting ! </p>}
                        </div>
                    </div>
                </div>
            </LayoutAll>
        </div>
    );
});

export default Contact;
