import "./App.css";

import { Header, Dance, Form, upComingEvent, Footer } from "./containers";
import { Navbar, Images } from "./components";

function App() {
	return (
		<div className="App">
			<div className="head">
				<Navbar />
				<Header />
			</div>
			<Images />
			<upComingEvent />
			<Dance />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
