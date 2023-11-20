import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import PrenotazionePage from './navbar/book/prenotazione'; // Assicurati che il percorso sia corretto

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<PrenotazionePage />
	</React.StrictMode>
);
