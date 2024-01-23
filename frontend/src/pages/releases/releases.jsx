import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import style from "./releases.module.css";

function Releases() {
	return (
		<>
			<Header></Header>
			<main>
				<h1>Releases</h1>
				<article className={style.article}>
                  <section className={style.releaseSection}>
                    <h2>v1.0.0</h2>
                    <p>Dato: 23-01-2024</p>
                    <ul>
                      <li>Vi har released siden til underviser</li>
                      <li>Vi har redesignet siden</li>
                      <li>Vi har lavet en pc verison af navigationen</li>
                      <li>Vi har lavet en release note side</li>
                      <li>Vi har lavet en find os side</li>
                    </ul>
                    <a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v1.0.0"}>
                      Link
                    </a>
                  </section>
                  <section className={style.releaseSection}>
                    <h2>v0.3.0</h2>
                    <p>Dato: 22-01-2024</p>
                    <ul>
                      <li>Vi har lavet projektet færdigt</li>
                      <li>Vi har redesignet</li>
                      <li>Vi har gjort det responsive</li>
                      <li>Vi har lavet en menu (til mobil)</li>
                      <li>Vi har stylet siden</li>
                    </ul>
                    <a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v0.3.0"}>
                      Link
                    </a>
                  </section>
                  <section className={style.releaseSection}>
                    <h2>v0.2.0</h2>
                    <p>Dato: 22-01-2024</p>
                    <ul>
                      <li>Vi har lavet cards med gruppemedlemer til vores about siden</li>
                      <li>Vi har indsat formål tekst</li>
                      <li>Vi har også lavet motto (title på siden)</li>
							<li>Vi har stylet siden</li>
						</ul>
						<a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v0.2.0"}>
							Link
						</a>
					</section>
					<section className={style.releaseSection}>
						<h2>v0.1.0</h2>
						<p>Dato: 19-01-2024</p>
						<ul>
							<li>Vi har udarbejdet tekstforfatning</li>
							<li>Vi har udarbejdet et wireframe</li>
							<li>Vi har udarbejdet et mockup</li>
							<li>
								Vi har indsamlet billede matriale (gruppemedlems billeder)
							</li>
							<li>Vi har udarbejdet et logo</li>
							<li>Vi har installeret React til projektet</li>
							<li>
								Vi har tilføjet en About side med en Header og en Footer. (Hvor
								der ikke er noget på)
							</li>
						</ul>
						<a
							target={"_blank"}
							href={
								"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v0.1.0"
							}
						>
							Link
						</a>
					</section>
					<div className={style.seeAll}>
						<a
							target={"_blank"}
							href={"https://github.com/UserWhy123/Scrum-Project-1/releases"}
						>
							See all releases
						</a>
					</div>
				</article>
			</main>
			<Footer></Footer>
		</>
	);
}

export default Releases;
