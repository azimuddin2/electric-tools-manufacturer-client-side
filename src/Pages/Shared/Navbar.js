import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    if(loading){
        return <Loading></Loading>
    }

    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
            {
                user ? <Link onClick={logout} to="/signup">SignOut</Link> : <Link to="/login">Login</Link>
            }
        </li>


        {/* <li>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class=""><FontAwesomeIcon className='text-4xl' icon={faCircleUser}></FontAwesomeIcon></label>
                <ul tabindex="0" class="lg:mt-40 mt-36 ml-40 text-primary dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>View Profile</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </li>
        <li>
            <div class="indicator">
                <span class="indicator-item badge bg-orange-300 text-white mt-4">99+</span>
                <FontAwesomeIcon className='text-2xl' icon={faCartShopping}></FontAwesomeIcon>
            </div>
        </li> */}

    </>

    return (
        <div className='bg-secondary text-white'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a>
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;