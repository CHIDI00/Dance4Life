import "./App.css";

import { Header, Dance, Form, UpComingEvent, Footer } from "./containers";
import { Navbar, Ticket } from "./components";

function App() {
	return (
		<div className="App">
			<div className="head">
				<Navbar />
				<Header />
			</div>
			<UpComingEvent />
			<Dance />
			<Form />
			<Footer />
			{/* <Ticket /> */}
		</div>
	);
}

export default App;
