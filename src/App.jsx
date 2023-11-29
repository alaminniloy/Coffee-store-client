import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
	const loadedCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadedCoffees);
	return (
		<div className="m-20">
			<h1 className="text-6xl text-purple-600 text-center">Vite + React</h1>
			<h2>Coffees: {coffees.length}</h2>
			<div className="grid md:grid-cols-2 gap-4">
				{coffees.map((coffee) => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
						coffees={coffees}
						setCoffees={setCoffees}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
