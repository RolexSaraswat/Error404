// import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (e) => {
    console.log("I was pressed", e)
    e.preventDefault()

    // Handle Register here!
    const response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

	 const data = await response.json()
    if(data.validated === true){
        console.log('found me', email)
        localStorage.clear()
        localStorage.setItem('email', email)
        localStorage.setItem('token', data.token)
        window.location.href = '/'
    }
    console.log(data)
  }
  return (
    <>
    <div className="row justify-content-center" style={{marginTop: '22.5vh'}}>
    <div className="App card p-5 align-items-center">
      {/* <img src={require("../assets/togo.png")} height="50"/> */}
      <h4 className="pb-0 mb-4" style={{fontSize: '1.25rem'}}> Login </h4>
      {/* <LoginPage></LoginPage> */}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email"
            value={email} onChange={(e) => setEmail(() => e.target.value)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password} onChange={(e) => setPassword(() => e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-warning p-2" style={{width: '100%', fontSize: '0.75rem'}}>Submit</button>
        <span style={{textDecoration: 'none'}}><Link to='/register'>Create an account</Link></span>
      </form>
    </div>
    </div>
    </>
  );
}

export default LoginPage;
