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
    <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-center pb-4">Register</p>
        <form onSubmit={handleSubmit}>
            <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="text" name="name" placeholder="Type your Name" required></input>
            <br />
            <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="email" name="email" placeholder="Type your Email" required></input>
            <br />
            <input className="bg-green-950 border-yellow-500 rounded-2xl border-[1px]  p-2 mb-2" type="password" name="password" placeholder="Type your Password" required></input>
            <br />
            <button className="bg-green-950 border-yellow-500 rounded-2xl border-[1px] p-2" type="submit">Register</button>
        </form>
    </div>
    );
};

export default Register;