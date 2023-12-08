import LineText from '../../component/LineText/LineText';
import TextTitle from '../../component/TextTitle/TextTitle';
import Button from '../../component/Button/Button';
import './About.css';

function About() {
    return (
        <div className="About">
            <div className="About_List">
                <img src="https://i.pinimg.com/564x/da/15/0f/da150f0689b045f5a36bacfa573d9e0b.jpg" alt="" />
            </div>
            <div className="About_List">
                <span className="About_Title">
                    <TextTitle>
                        <p>About-Me</p>
                    </TextTitle>
                    <LineText className="About_LineText" />
                </span>
                {/* -- */}
                <div className="About_Content">
                    <p>
                        Hello everyone! My name is Viet Ha. Currently, I am a 4th year student at Hanoi University of
                        Inductry, majoring in Information Technology, software design department. I want to become a
                        Front-end Developer that brings the most perfect user experience and beautiful images to my
                        customers.
                    </p>
                    {/* - */}
                    <div className="About_Content_List">
                        <ul className="About_Content_List_Items">
                            <li>Name: </li>
                            <li>Age:</li>
                            <li>Address:</li>
                            <li>Phone:</li>
                            <li>Email:</li>
                        </ul>
                        <ul className="About_Content_List_Items">
                            <li>Nguyen viet Ha</li>
                            <li>22</li>
                            <li>Ha Noi</li>
                            <li>+84-793330769</li>
                            <li>haviet1712@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <Button className="About_Btn" Btn_text="Read More"></Button>
            </div>
        </div>
    );
}

export default About;
