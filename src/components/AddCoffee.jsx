import Swal from "sweetalert2";

const AddCoffee = () => {
	// const [first, setfirst] = useState(second);
	const handleAddCoffee = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;
		const newCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};
		console.log(newCoffee);
		// form.reset();
		fetch("http://localhost:5000/coffee", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Coffee Added Successfully ",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};
	return (
		<div className="bg-[#F4F3F0] p-24">
			<h2 className="text-3xl font-bold text-center ">Add a Coffee</h2>
			<form onSubmit={handleAddCoffee}>
				{/* form name and quantity row */}
				<div className="md:flex gap-4 my-8">
					<div className="md:w-1/2">
						<h3>Coffee Name</h3>

						<input
							className="input input-bordered join-item w-full"
							placeholder="Coffee Name"
							type="text"
							name="name"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
					<div className="md:w-1/2">
						<h3>Available Quantity</h3>
						<input
							className="input input-bordered join-item w-full"
							placeholder="Available Quantity"
							type="text"
							name="quantity"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
				</div>
				{/* form supplier and taste row */}
				<div className="md:flex gap-4 my-8">
					<div className="md:w-1/2">
						<h3>Supplier</h3>

						<input
							className="input input-bordered join-item w-full"
							placeholder="Coffee Supplier Name"
							type="text"
							name="supplier"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
					<div className="md:w-1/2">
						<h3>Taste</h3>
						<input
							className="input input-bordered join-item w-full"
							placeholder="Enter coffee taste"
							type="text"
							name="taste"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
				</div>
				{/* form category and details row */}
				<div className="md:flex gap-4 my-8">
					<div className="md:w-1/2">
						<h3>Category</h3>

						<input
							className="input input-bordered join-item w-full"
							placeholder="Coffee Category"
							type="text"
							name="category"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
					<div className="md:w-1/2">
						<h3>Details</h3>
						<input
							className="input input-bordered join-item w-full"
							placeholder="Coffee Details"
							type="text"
							name="details"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
				</div>
				<div className=" gap-4">
					<div className="md:w-full">
						<h3>Photo </h3>

						<input
							className="input input-bordered join-item w-full"
							placeholder="Enter photo Url"
							type="text"
							name="photo"
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
				</div>

				<button className="btn btn-block mt-4 bg-[#D2B48C]" type="submit">
					Add coffee
				</button>
			</form>
		</div>
	);
};

export default AddCoffee;
