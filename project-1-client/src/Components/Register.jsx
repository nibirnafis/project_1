// import { userRegistration } from "../Firebase/utilities";
import { useNavigate } from "react-router-dom";
import { userRegistration } from "../Firebase/AuthProvider";

const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        userRegistration(name, email, password)
        navigate('/login')
    }


return (
    <div>
        <p>Register</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Type your Name" required></input>
            <br />
            <input type="email" name="email" placeholder="Type your Email" required></input>
            <br />
            <input type="password" name="password" placeholder="Type your Password" required></input>
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
    );
};

export default Register;