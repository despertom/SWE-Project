import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/signup">Signup</Link>
			<Link to="/login">Login</Link>
			<Link to="/Info">Info</Link>
		</nav>
	);
}
export default Navbar;
