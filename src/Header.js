import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
function Header() {
    return (
        <nav className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='https://i.dlpng.com/static/png/197684_preview.png'
                    alt='logo'
                />
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <Link className='header__link'>
                    <div className='header_option'>
                        <span>Hello Arpit</span>
                        <span>Sign In</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
