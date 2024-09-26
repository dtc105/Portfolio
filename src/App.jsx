import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Desktop from "./pages/Desktop";

function App() {

	const [username, setUsername] = useState("");

	useEffect(() => {
		setUsername(localStorage.getItem("username"));
	}, []);

	if (!username) return <Login />

	return <Desktop />
}

export default App;
