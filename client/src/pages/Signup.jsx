import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import signupImage from '../RideOn Images/10069.jpg';

const Signup = () => {
    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            fullname: e.target.fullname.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        signup(formData);

        e.target.reset();
    }

    return (
        <>
            <div className="flex items-center mb-15" style={{ backgroundImage: `url(${signupImage})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-15 text-white text-[14px]">Signup</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center items-center h-70">
                <input className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" type="name" name="fullname" placeholder="Enter your fullname" required />
                <input className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" type="email" name="email" placeholder="Enter your email" required />
                <input className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" type="password" name="password" placeholder="Enter your password" required /> 
                <div className="flex justify-center items-center w-full">
                    <button style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', backgroundColor: '#FFDB00'}} className="text-[19px] flex p-2 lg:w-220 md:w-full sm:w-full w-full justify-center">SIGNUP</button>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Signup;