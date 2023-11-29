import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { _id, name, quantity, supplier, taste, category, details, photo } =
		coffee;

	const handleUpdateCoffee = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;
		const updatedCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};
		console.log(updatedCoffee);
		// form.reset();
		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Coffee Updated Successfully ",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};
	return (
		<div className="bg-[#F4F3F0] p-24">
			<h2 className="text-3xl font-bold text-center ">
				Update a Coffee:{name}
			</h2>
			<form onSubmit={handleUpdateCoffee}>
				{/* form name and quantity row */}
				<div className="md:flex gap-4 my-8">
					<div className="md:w-1/2">
						<h3>Coffee Name</h3>

						<input
							className="input input-bordered join-item w-full"
							placeholder="Coffee Name"
							type="text"
							name="name"
							defaultValue={name}
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
							defaultValue={quantity}
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
							defaultValue={supplier}
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
							defaultValue={taste}
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
							defaultValue={category}
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
							defaultValue={details}
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
							defaultValue={photo}
						/>
						{/* <button className="btn join-item rounded-r-full">Subscribe</button> */}
					</div>
				</div>

				<button className="btn btn-block mt-4 bg-[#D2B48C]" type="submit">
					Update coffee
				</button>
			</form>
		</div>
	);
};

export default UpdateCoffee;
