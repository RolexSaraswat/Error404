import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registrationError, setRegistrationError] = useState(0)

    const handleRegister = async (e) => {
        console.log("I was pressed", e)
        e.preventDefault()

        // Handle Register here!
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,

            }),
        })
        const data = await response.json()
        console.log(data)
        if (data.existError) {
            console.log('USER Already Exists')
            // alert('User Already Present')
            setRegistrationError(1)
        }
        else {
            localStorage.clear()
            localStorage.setItem('email', email)
            localStorage.setItem('token', data.token)
            setRegistrationError(0)
            window.location.href = '/'
        }
    }
    return (
        <>
        <div className="row justify-content-center">
            <div className="App card p-5" style={{marginTop: '15vh'}}>
                <h4 className="pb-2" style={{fontSize: '1.25rem'}}> Create a New Account! </h4>
                <br></br>
                {/* <LoginPage></LoginPage> */}
                <form onSubmit={handleRegister} style={{fontSize: '1rem'}}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required
                            value={name} onChange={(e) => setName(() => e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required
                            value={email} onChange={(e) => setEmail(() => e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required
                            value={password} onChange={(e) => setPassword(() => e.target.value)}
                        />
                    </div>
                    <div className="alert alert-danger" role="alert" hidden={!registrationError}>
                        This email is already registered, please try a new email or login!
                    </div>
                    <button type="submit" className="btn btn-warning p-2" style={{width: '100%', fontSize: '0.75rem'}}>Submit</button>
                </form>
            </div></div>
        </>
    );
}

export default Register;
