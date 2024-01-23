import {React, useState} from 'react';
import styles from './header.module.css'
import logo from './../../../../images/nylogo.png'
import burgerIcon from './../../assets/images/burger-icon.svg'


function Header(props) {
	//hvis useState default er true så loader websiden med nav menuen åben!
	const [isNavVisible, setNavVisibility] = useState(false);


	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
		if(isNavVisible) {
			document.getElementById("myLinks").style.display = "none";
		} else {
			document.getElementById("myLinks").style.display = "flex"
		}
	};


	return (
		<header className={styles.header}>
			<nav>

				<div className={styles.topnav}>
					<a href="/" className={styles.logo}><img src={logo} alt="logo"/></a>
					<h1 className={styles.title}>SCRUM: Fueling Teams, Igniting Success!</h1>

					{/*<!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->*/}
					<a className={styles.icon} onClick={toggleNav}>
						<img src={burgerIcon} alt="burger_menu_icon"/>
					</a>

					{/*<!-- Navigation links (hidden by default) -->*/}
					<div id="myLinks" className={styles.myLinks}>
						<a href="/">Forside</a>
						<a href="/release">Releases</a>
						<a href="/findos">Find os</a>
					</div>
				</div>

			</nav>
		</header>
	);
}

export default Header;