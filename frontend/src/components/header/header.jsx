import {React, useState} from 'react';
import styles from './header.module.css'


function Header(props) {

	const [isNavVisible, setNavVisibility] = useState(true);


	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
	  };


	return (
		<header className={styles.header}>
			<nav>
				
			<div className={styles.topnav}>
  				<a href="#home" className={styles.active}>Logo</a>
  				{/*<!-- Navigation links (hidden by default) -->*/}
  				<div id="myLinks" style={{ display: isNavVisible ? 'block' : 'none' }}>
    				<a href="#news">News</a>
    				<a href="#contact">Contact</a>
    				<a href="#about">About</a>
  				</div>
  				{/*<!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->*/}
  				<a href="javascript:void(0);" className={styles.icon} onClick={toggleNav}>
    				<i className="fa fa-bars"></i>
 				</a>
			</div>

			</nav>
		</header>
	);
}

export default Header;