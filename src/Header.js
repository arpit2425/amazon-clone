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
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLine1'>Hello Arpit</span>
                        <span className='header__optionLine2'>Sign In</span>
                    </div>
                </Link>
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLine1'>Returns</span>
                        <span className='header__optionLine2'>& Orders</span>
                    </div>
                </Link>
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLine1'>Your</span>
                        <span className='header__optionLine2'>Prime</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
