import React from 'react';
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import stlye from "./releases.module.css"

function Releases() {
	return (
		<>
			<Header></Header>
			<main>
			<h1>Releases</h1>
				<article className={stlye.article}>
					
					<section className={stlye.releaseSection}>
						<h2>0.4.0</h2>
						<p>
							<span>This is the release notes for version 0.4.0</span>
						</p>
						<a href={""}>Link</a>
					</section>
					<section className={stlye.releaseSection}>
						<h2>0.3.0</h2>
						<p>
							<span>This is the release notes for version 0.3.0</span>
						</p>
						<a href={"kage"}>Link</a>
					</section>
					<section className={stlye.releaseSection}>
						<h2>0.2.0</h2>
						<p>
							<span>This is the release notes for version 0.2.0</span>
						</p>
						<a href={""}>Link</a>
					</section>
					<section className={stlye.releaseSection}>
						<h2>0.1.0</h2>
						<p>
							<span>This is the release notes for version 0.1.0</span>
						</p>
						<a href={""}>Link</a>
					</section>
				</article>
			</main>
			<Footer></Footer>
		</>
	);
}

export default Releases;