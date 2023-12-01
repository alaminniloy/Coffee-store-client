import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<NavLink to={"/"}>Home</NavLink>
			<button>Home</button>
			<NavLink to={"/users"}>User</NavLink>
			<NavLink to={"/signUp"}>SignUp</NavLink>
			<NavLink to={"/signIn"}>SignIn</NavLink>
		</div>
	);
};

export default Header;
