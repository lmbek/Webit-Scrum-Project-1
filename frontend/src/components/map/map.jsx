import React from 'react';
import style from "./map.module.css";

function Map() {
	return (
		<iframe className={style.googleMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.657929345504!2d10.887433999999999!3d56.4047207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd5b14f421121%3A0x7de336d6b4d8265c!2sYdesvej%204%2C%208500%20Gren%C3%A5!5e0!3m2!1sen!2sdk!4v1706000941107!5m2!1sen!2sdk"></iframe>
	);
}

export default Map;