import './findus.module.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Map from "../../components/map/map.jsx"
import style from "../../components/map/map.module.css";
import React from "react";
function Findus() {
	return (
		<>
			<Header></Header>
			<main>
				<div className={style.Map}>
					<address className={style.Adresse}>
						<h1>Find os</h1>
						<Map></Map>
					</address>
				</div>
			</main>
			<Footer></Footer>
		</>
);
}

export default Findus;
