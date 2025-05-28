import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Simple email pattern
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Clear error and submit data
    setError('');
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        alert("Employee registered!");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
        setError("Server error. Try again later.");
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="rounded ">
        <div className="bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Register Here!</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="form-control rounded-0 mb-3"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="form-control rounded-0 mb-3"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="form-control rounded-0 mb-3"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-success w-100" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
