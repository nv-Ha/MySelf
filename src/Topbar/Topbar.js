import './TopBar.css';

function Topbar() {
    return (
        <div className="TopBar">
            <div className="TopBar_List">
                {/* - */}
                <div className="TopBar_Items">
                    <p>My</p>
                    <p>Selft</p>
                </div>
                {/* - */}
                <div className="TopBar_Items">
                    <ul className="TopBar_Items_List">
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
