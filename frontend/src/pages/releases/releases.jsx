import React from 'react';
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import style from "./releases.module.css"

function Releases() {
	return (
		<>
			<Header></Header>
			<main>
			<h1>Releases</h1>
				<article className={style.article}>
					
					<section className={style.releaseSection}>
						<h2>1.0.0</h2>
						<p>
							<span>This is the release notes for version 0.4.0</span>
						</p>
						<a target={"_blank"} href={""}>Link</a>
					</section>
					<section className={style.releaseSection}>
						<h2>0.3.0</h2>
						<p>
							<span>This is the release notes for version 0.3.0</span>
						</p>
						<a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v0.3.0"}>Link</a>
					</section>
					<section className={style.releaseSection}>
						<h2>0.2.0</h2>
						<p>
							<span>This is the release notes for version 0.2.0</span>
						</p>
						<a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v0.2.0"}>Link</a>
					</section>
					<section className={style.releaseSection}>
						<h2>0.1.0</h2>
						<p>
							<span>This is the release notes for version 0.1.0</span>
						</p>
						<a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases/tag/v0.1.0"}>Link</a>
					</section>
					<div className={style.seeAll}>
						<a target={"_blank"} href={"https://github.com/UserWhy123/Scrum-Project-1/releases"}>See all releases</a>
					</div>
				</article>
			</main>
			<Footer></Footer>
		</>
	);
}

export default Releases;