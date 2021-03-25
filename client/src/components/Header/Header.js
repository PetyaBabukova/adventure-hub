import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <nav className="main-navigation">
                    <li><NavLink activeClassName="clicked" to="/">Home</NavLink> </li>
                    <li><NavLink activeClassName="clicked" to="/posts">Posts</NavLink> </li>
                    <li><NavLink activeClassName="clicked" to="/friends">Friends</NavLink> </li>
                </nav>
            </div>
            <div className="header-nav">
                <form className="login">
                    <h3>Login</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"></input>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password"></input>
                    <input type="button" value="connect"></input>
                </form>
            </div>
        </div>
    )
};

export default Header;