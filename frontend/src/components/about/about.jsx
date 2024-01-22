import React from "react";
import data from "./about.json";
import style from "./about.module.css";

function About() {
	return (
		<div className={style.about}>
			<h1 className={style.title}>Members</h1>
			<div className={style.members}>
				{data.map((item, index) => {
					return (
						<div key={index} className={style.cardStyling}>
							<img src={item.image.src} alt={item.image.alt}/>
							<p className={style.rolle}>{data[index]["Rolle i teamet"]}</p>
							<p className={style.navn}>{data[index].Navn}</p>
							
						</div>
					);
				})}
			</div>
			<div className={style.goal}>
				<p>
					Vores mål er at mestre Scrum og lære om dens anvendelse i komplekse projekter.
					Intention bag vores mål er at effektivisere vores arbejde i projektet gennem samarbejde.
					Vi vil arbejde fokuseret, have åbenhed om kompleksiteter, have respekt for hinanden og mod til at
					engagere sig i projektet.
				</p>
				<p>
					Sideløbbende vil vi også mestre et workflow i git, hvor vi har en LatestRelease branch, en
					Development branch og nogle developer branches. Dette vil gøre os i stand til at arbejde med
					fildeling og versionsstyring nemmere.
				</p>
			</div>
		</div>
	);
}

export default About;
