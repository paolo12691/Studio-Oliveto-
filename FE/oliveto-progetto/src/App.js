import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navbar/navigation';
import Carouselpage from './carosello/carouselpage';
import BasicExample from './counter/basicExample';
import Footer from './Foot/footer';
import PrenotazionePage from './navbar/book/prenotazione';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Routes>
						<Route path="/prenotazione" element={<PrenotazionePage />} />
						<Route path="/" element={<Carouselpage />} />
						<Route path="/basic-example" element={<BasicExample />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
