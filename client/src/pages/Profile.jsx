import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import profile from '../RideOn Images/10069.jpg';
import Footer from "../components/Footer";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center" style={{ backgroundImage: `url(${profile})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-15 text-gray-400 text-[14px]">Home Page - <span style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="text-white font-semibold text-[16px]">Profile</span></p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex justify-center mb-5">
                    <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col flex flex-col justify-between mt-15 items-center w-120">
                        <div>
                            <img className="w-50 h-50 rounded-full" src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" />
                        </div>
                        <div>
                            <p className="text-[30px] font-semibold mb-2" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>{user.fullname}</p>
                            <p><span className="font-semibold">Email: </span>{user.email}</p>
                            <p><span className="font-semibold">IS VERIFIED: </span>{user.isVerified ? "Yes" : "No"}</p>
                            <p><span className="font-semibold">Role: </span>{user.role}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-center items-center">
                        <hr className="border-gray-300 w-150" />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button className="p-2 w-50 font-semibold" onClick={() => navigate('/orders')} style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>SHOW ORDER HISTORY</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile;