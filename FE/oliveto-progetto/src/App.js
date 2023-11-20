import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navbar/navigation'; // Assicurati che il percorso sia corretto
import Footer from './Foot/footer';
import PrenotazionePage from './navbar/book/prenotazione';
import HomePage from './homapage/homepage';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Routes>
						<Route path="/prenotazione" element={<PrenotazionePage />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
