import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.css';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <Link className={styles.link} to='/'>فروشگاه</Link>
            <Link className={styles.link} to='/about'>درباره</Link>
            <Link className={styles.link} to='/cart'> <CartIcon className="carticon" /> کارت ({itemCount})</Link>
        </header>
     );
}
 
export default Header;