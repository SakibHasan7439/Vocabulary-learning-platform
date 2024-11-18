import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Register = () => {
    const { registerNewAccount } = useContext(AuthContext);
    const [error, setError] = useState('');
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    const handleRegisterUser = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        // const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        console.log(e.target.email);
        setError('');
        if(password.length < 6){
            setError("Password must be 6 or more character long");
            return;
        }

        if(!regex.test(password)){
            setError("Password must contain at least one uppercase and lowercase letter");
            return;
        }


        registerNewAccount(email, password)
        .then(()=>{
            toast.success('Successfully Registered');
            <Navigate to={"/"}></Navigate>
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm md:w-[380px] shrink-0 shadow-2xl">
          <form onSubmit={handleRegisterUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoUrl"
                name="PhotoUrl"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="text-red-500">{error}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-950 text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
