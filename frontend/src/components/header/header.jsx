import {React, useState} from 'react';
import styles from './header.module.css'
import logo from './../../../public/images/logo-vid.png'
import burgerIcon from './../../../public/images/burger-icon.svg'


function Header(props) {
	//hvis useState default er true så loader websiden med nav menuen åben!
	const [isNavVisible, setNavVisibility] = useState(false);


	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
	};


	return (
		<header className={styles.header}>
			<nav>

				<div className={styles.topnav}>
					<a href="#home" className={styles.active}><img src={logo} alt="logo"/></a>
					<h1>Title</h1>

					{/*<!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->*/}
					<a className={styles.icon} onClick={toggleNav}>
						<img src={burgerIcon} alt=""/>
					</a>

					{/*<!-- Navigation links (hidden by default) -->*/}
					<div id="myLinks" className={styles.myLinks} style={{display: isNavVisible ? 'block' : 'none'}}>
						<a href="#news">News</a>
						<a href="#contact">Contact</a>
						<a href="#about">About</a>
					</div>
				</div>

			</nav>
		</header>
	);
}

export default Header;