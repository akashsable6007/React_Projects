

import brand_logo from "../assets/Images/brand_logo.png"
import "./navbar.css"

function Navbar(){
    return(
        <div>
            <nav className='navbar'>
                <div className="logo">
                    <img src= {brand_logo} alt="logo" />
                </div>
                <ul>
                    <li href="#" >Menu</li>
                    <li href="#" >Location</li>
                    <li href="#" >About</li>
                    <li href="#" >Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;
