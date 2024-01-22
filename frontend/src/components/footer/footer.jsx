import React from "react";
import style from "./footer.module.css";

function Footer(props) {
  return (
    <div className={style.gridContainer}>
      <div className={style.gridItemStart}>
        <p>3D College</p>
        <p>Ydesvej 4, Grenaa</p>
      </div>

      <div className={style.gridItemEnd}>
        <p><img className={style.icon} src="images/facebookIcon.png" alt="Facebook icon" /></p>
        <p><img className={style.icon} src="images/instagramIcon.webp" alt="" /></p>
		<p><img className={style.icon} src="images/pinterestIcon.png" alt="" /></p>
      </div>
    </div>
  );
}

export default Footer;
