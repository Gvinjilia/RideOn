import { useEffect } from "react";
import { useUsers } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";

const Users = () => {
    const { users, getUsers, deleteUser, updateUserRole } = useUsers();
    const { user } = useAuth();

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <>
            <div className="flex justify-center mr-63">
                <div className='w-4 h-4 mt-7' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                <h1 className='text-4xl font-bold mt-5 pl-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>USERS</h1>
            </div>
            {
                users.map((user1, index) => (
                    user._id !== user1._id && user1.role !== 'admin' && (
                        <div className="flex justify-center flex-col items-center">
                            <div key={index} className="flex justify-center mb-5 gap-10 mt-10 border w-90 p-5">
                                <img className="w-20 h-20 rounded-full" src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" />
                                <div className="w-70">
                                    <h1><span style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="font-semibold text-[18px]">User Fullname:</span> {user1.fullname}</h1>
                                    <h1><span style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="font-semibold text-[18px] mb-10">IsVerified:</span> {user1.isVerified ? 'YES' : 'NO'}</h1>
                                    <div className="flex justify-between items-center w-50">
                                        <h1 onClick={() => updateUserRole(user1._id)}><span style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="font-semibold text-[18px] mb-10">User Role: </span> 
                                            {user1.role}
                                        </h1>
                                        <button className="text-[13px] mt-1.5" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>UPDATE TO ADMIN</button>
                                    </div>
                                    <button className="border p-1 w-30 mt-5" onClick={() => deleteUser(user1._id)}>Delete User</button>
                                </div>
                            </div>
                        </div>
                    )
                ))
            }
        </>
    )
}

export default Users;