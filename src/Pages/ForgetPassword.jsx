import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userEmail = location.state?.email || "";

    const {forgetPassword} = useContext(AuthContext);
    const handleForgetPassword = (e) =>{
        e.preventDefault();

        forgetPassword(userEmail)
        .then(()=>{
            toast.success("Check Your Email");
            navigate('/login');

        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }

    return (
        <div>
            <form onSubmit={handleForgetPassword} className="md:w-[50%] bg-blue-300 my-6 lg:w-[40%] mx-auto md:p-12 p-8">
                <label>
                    <input className="px-4 outline-none rounded-md mb-2 py-3 w-full" type="email" name="email" value={userEmail} readOnly/>
                </label>
                    <button className="btn bg-sky-700 hover:bg-sky-900 border-none text-white px-6">reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;