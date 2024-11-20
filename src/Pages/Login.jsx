import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();


    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(()=>{
            toast.success("Sign in successful");
            e.target.reset();
            return navigate(location?.state ? location.state : "/");
            
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then((res)=>{
          toast.success("SignIn successful");
          console.log(res);
          return navigate('/');
           
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }


  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 max-w-sm md:w-[350px] shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                onChange={(e)=> setEmail(e.target.value)}
                required
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
                <Link to={"/forgetPass"}  state={{ email }} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-950 text-white mb-2">Login</button>
              <button onClick={handleSignInWithGoogle} className="bg-white px-4 py-2 shadow-sm border border-black rounded-md flex justify-center items-center gap-2"
              >
                <FcGoogle></FcGoogle>
                <span>Sign in with Google</span>
              </button>
            </div>
            <p>New to this website ? <Link to={"/register"} className="font-semibold text-blue-950 underline">Register Now</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
