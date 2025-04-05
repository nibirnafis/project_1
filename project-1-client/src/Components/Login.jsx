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
        <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold text-center pb-4">Login</p>
                <form onSubmit={handleLogin}>
                <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="email" name="email" placeholder="Your Email"></input>
                <br />
                <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="password" name="password" placeholder="Your Password"></input>
                <br />
                <button className="bg-green-950 border-yellow-500 rounded-2xl border-[1px] p-2" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;