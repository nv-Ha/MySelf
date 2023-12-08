import './App.scss';
import About from './Content/About/About';
import Blog from './Content/Blog/Blog';
import Contact from './Content/Contact/Contact';
import Home from './Content/Home/Home';
import Skill from './Content/Skills/Skills';
import Topbar from './Topbar/Topbar';

function App() {
    return (
        <div className="App">
            <Topbar />
            <div className="AppNav">
                <Home />
                <About />
                <Skill />
                <Blog />
                <Contact />
            </div>
        </div>
    );
}

export default App;
