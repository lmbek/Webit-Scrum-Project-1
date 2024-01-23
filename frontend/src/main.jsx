import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css'
import Home from "./pages/home/home.jsx";
import Findus from "./pages/findus/findus.jsx";

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
	<Router>
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/findos" element={<Findus />} />
			</Routes>
		</>
	</Router>
);
