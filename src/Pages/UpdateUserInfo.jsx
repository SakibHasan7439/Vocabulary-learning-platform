import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateUserInfo = () => {
    const navigate = useNavigate();
    const { updateUserProfile, setIsLoading } = useContext(AuthContext);

    const handleUpdateUser = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        updateUserProfile(name, photoUrl)
        .then(()=>{
            toast.success("Successfully updated");
            setIsLoading(false)
            navigate('/profile');
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }

    return (
        <div>
            <form onSubmit={handleUpdateUser} className="md:w-[50%] bg-blue-300 my-6 lg:w-[40%] mx-auto md:p-12 p-8">
                <label>
                    <input className="px-4 outline-none rounded-md mb-2 py-3 w-full" type="text" placeholder="Enter a userName" name="name"/>
                </label>
                <label>
                    <input className="px-4 outline-none rounded-md mb-2 py-3 w-full" type="text" placeholder="Enter a photoURL" name="photoUrl"/>
                </label>
                    <button className="btn bg-sky-700 hover:bg-sky-900 border-none text-white px-6">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateUserInfo;