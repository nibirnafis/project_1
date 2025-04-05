import { useNavigate } from "react-router-dom";
import { userLogin } from "../Firebase/AuthProvider";

const Login = () => {

    const navigate = useNavigate()


    const handleLogin = (e) => {
            e.preventDefault()
            const form = e.target
            const email = form.email.value
            const password = form.password.value
            userLogin(email, password)
            navigate('/')
        }

    return (
        <div>
            <p>Login</p>
                <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Your Email"></input>
                <br />
                <input type="password" name="password" placeholder="Your Password"></input>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;