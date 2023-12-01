import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
	const { createUser } = useContext(AuthContext);

	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		createUser(email, password)
			//
			.then((result) => {
				console.log(result.user);
				// new user has been created
				const createAt = result.user?.metadata?.creationTime;
				const user = { email, createAt };
				fetch("https://coffee-store-server-eight-henna.vercel.app/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				})
					.then((res) => res.json())
					.then((data) => {
						// console.log(data);
						if (data.insertedId) {
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Your work has been saved",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Sign Up !</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSignUp} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									name="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary text-white">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
