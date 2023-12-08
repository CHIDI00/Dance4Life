import "./App.css";

import { Header, Dance, Form, Event, Footer } from "./containers";
import { Navbar, DanceImage } from "./components";

function App() {
	return (
		<div className="App">
			<div className="head">
				<Navbar />
				<Header />
			</div>
			<DanceImage />
			<Event />
			<Dance />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
