import React from 'react';
import "./Header.css";
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
function Header() {
    // const [{ basket }] = useStateValue();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header_logo">
                    <StoreIcon className="header_logoImage" fontSize="large" />
                    <h2 className="header_logoTitle">Xclusive</h2>
                </div>
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" fontSize="large" />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <div className="nav_itemLineOne">Hello Guest</div>
                    <div className="nav_itemLineTwo">Sign In</div>
                </div>
                <div className="nav_item">
                    <div className="nav_itemLineOne">Your</div>
                    <div className="nav_itemLineTwo">Shop</div>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav_item basket nav_itemBasket">
                        <div className="nav_itemLineTwo nav_basketCount"> {basket.length} </div>
                        <ShoppingCartIcon className="" fontSize="large" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header