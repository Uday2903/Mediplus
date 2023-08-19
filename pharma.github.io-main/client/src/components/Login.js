import React, {useState,useEffect} from "react";
import axios from "axios";
import NewNavbar from "./NewNavbar";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,BrowserRouter} from "react-router-dom";
import Logout from "./Logout";


export default function Login() {
	const [person, setPerson] = useState({
		email: "",
		password: "",
	});
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	// useEffect((event) => {
		
		
	//   }, [user, loading]);

	  const loginFunc=()=>{
		if (loading) {
			// maybe trigger a loading screen
			return;
		  }
		  if (user){
			  // event.preventDefault();
			  navigate("/");
			  alert("User Logged in Successfully");
		  }
		// logInWithEmailAndPassword(person.email, person.password)
	  }

// 	// const [email, setEmail] = useState("");
// 	// const [pass, setPass] = useState("");

// 	// const handleChange=()=>{
// 	// 	if(email==="pwaghanna@yahoo.com" && pass==="12345678")
// 	// 	{
			
// 	// 	}
// 	// 	else
// 	// 	{
// 	// 		alert("Wrong inputs");
// 	// 	}
// 	// }

// 	// const handleSubmit = async (e) => {
// 	// 	e.preventDefault();
// 	// 	console.log(user);

// 	// 	const res = await axios.post(
// 	// 		"http://localhost:8000/auth/login",
// 	// 		user,
// 	// 	);
// 	// };
// 	<BrowserRouter>
//       <Logout />
//   </BrowserRouter>
	return (
		<>
			<NewNavbar />
			<div className='container my-5 col-6 '>
				<form className='row g-3'>
					<div className='col-12'>
						<label
							className='form-label'
							for='form2Example1'>
							Email address
						</label>
						<input
							onChange={(e) =>
								setPerson({
									...person,
									email: e
										.target
										.value,
								})
							}
							type='email'
							id='form2Example1'
							className='form-control'
						/>
					</div>

					<br />
					<div className='col-12'>
						<label
							className='form-label'
							for='form2Example2'>
							Password
						</label>
						<input
							onChange={(e) =>
								setPerson({
									...person,
									password: e
										.target
										.value,
								})
							}
							type='password'
							id='form2Example2'
							className='form-control'
						/>
					</div>
							<br/>
					
					<div className="col 4">		
					{console.log(person.password)}	
					<button onClick={() => {logInWithEmailAndPassword(person.email, person.password); loginFunc()}} type='button' className='btn btn-primary btn-block mb-4 '>
						
						Sign in
					</button>
					{/* <button className="login__btn login__google" onClick={signInWithGoogle}>
                       Login with Google
                    </button> */}
					</div>
					<div className='col-12'>
						<p>							
							<a href='/Register'>Register Employee Here</a>
						</p>
					</div>
				</form>
			</div>
		</>
	);
}
