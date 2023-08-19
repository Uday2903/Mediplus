import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import AddStock from "./components/AddStock";
import StockAlert from "./components/StockAlert";
import SearchMed from "./components/SearchMed";
import NewMed from "./components/NewMed";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import Logout from "./components/Logout";
import Empty from "./components/Empty";

function App() {
	const url = window.location.href.split("/")[3];

	return (
		<>
			{url !== "login" && url !== "register" ? (
				<Empty/>
			) : null}
			<Router>
				{/* <Navbar/> */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>

					<Route
						path='/NewMed'
						element={<NewMed />}
					/>
					<Route
						path='/SearchMed'
						element={<SearchMed />}
					/>
					<Route
						path='/AddStock'
						element={<AddStock />}
					/>
					<Route
						path='/StockAlert'
						element={<StockAlert />}
					/>
				</Routes>
				
			</Router>
		</>
	);
}

export default App;
