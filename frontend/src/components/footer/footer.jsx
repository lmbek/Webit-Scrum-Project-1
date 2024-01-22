import React from "react";
import style from "./footer.module.css";

function Footer() {
	return (
		<div className={style.gridContainer}>
			<div className={style.gridItemStart}>
				<p>3D College</p>
				<a target={"_blank"} href={"https://videndjurs.dk/"}><img src={"/images/logo-vid.png"}
																		  alt={"videndjurs logo"}></img></a>
				<p>Ydesvej 4, Grenaa</p>
			</div>
			<div className={style.gridItemEnd}>
				<p><a target={"_blank"} href={"https://facebook.com"}><img className={style.icon} src="images/facebookIcon.png" alt="Facebook icon"/></a></p>
				<p><a target={"_blank"} href={"https://instagram.com"}><img className={style.icon} src="images/instagramIcon.webp" alt="Instagram icon"/></a></p>
				<p><a target={"_blank"} href={"https://pinterest.com"}><img className={style.icon} src="images/pinterestIcon.png" alt="Pinterest icon"/></a></p>
			</div>
		</div>
	);
}

export default Footer;
