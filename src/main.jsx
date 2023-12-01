import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		loader: () =>
			fetch("https://coffee-store-server-eight-henna.vercel.app/coffee"),
	},
	{
		path: "/addCoffee",
		element: <AddCoffee></AddCoffee>,
	},
	{
		path: "/updateCoffee/:id",
		element: <UpdateCoffee />,
		loader: ({ params }) =>
			fetch(
				`https://coffee-store-server-eight-henna.vercel.app/coffee/${params.id}`
			),
	},
	{
		path: "/signUp",
		element: <SignUp />,
	},
	{
		path: "/signIn",
		element: <SignIn></SignIn>,
	},
	{
		path: "/user",
		element: <Users></Users>,
		loader: () =>
			fetch("https://coffee-store-server-eight-henna.vercel.app/user"),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			{/* <App /> */}
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
