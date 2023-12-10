import { useRef } from 'react';
import './App.scss';
import About from './Content/About/About';
import Blog from './Content/Blog/Blog';
import Contact from './Content/Contact/Contact';
import Home from './Content/Home/Home';
import Skill from './Content/Skills/Skills';
import Topbar from './Topbar/Topbar';

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <div className="App">
            <Topbar
                scrollRef={{ home: homeRef, about: aboutRef, skills: skillsRef, blog: blogRef, contact: contactRef }}
            />
            <div className="AppNav">
                <Home ref={homeRef} />
                <About ref={aboutRef} />
                <Skill ref={skillsRef} />
                <Blog ref={blogRef} />
                <Contact ref={contactRef} />
            </div>
        </div>
    );
}

export default App;
