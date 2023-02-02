import React from 'react'
import { Link } from 'react-router'
import '../styles/navBar.css'
import { useLocation, useHistory } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);
  return location.pathname
}

const logout = () => {
    localStorage.removeItem('token');
   
  };
export default function NavBar() {
    const history = useHistory();
    return (
        <>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item navbrand">
                      <a href="/">  <img  src={require("../assets/togo.png")} width="100" height="90px" alt="LOGO NOT WORKING"  srcset="" /> </a>
                    </li>
                    <li className="nav-item" >
                        <a className='nav-sub-item-1' href="/preferences">Preferences</a>
                        <a href="/myTrips" className='nav-sub-item'>Trips</a>
                    </li>
                    <li className="nav-item">
                        <a href='/login' className="nav-btn"style={{
        backgroundColor: '#2a373af2'}} hidden={localStorage.getItem('token')}>Sign In</a>
                        <a href='/'style={{
        backgroundColor: '#2a373af2'}} onClickCapture={logout} className="nav-btn" hidden={!localStorage.getItem('token')}>Logout</a>
                    </li>
                </ul>
            </nav>
            <br></br><br></br>
        </>
    )
}
