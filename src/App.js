import "./App.css";

import { Header, Dance, Form, UpComingEvent, Footer } from "./containers";
import { Navbar, Images } from "./components";

function App() {
	return (
		<div className="App">
			<div className="head">
				<Navbar />
				<Header />
			</div>
			{/* <Images /> */}
			<UpComingEvent />
			<Dance />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
