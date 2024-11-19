import { Link, Navigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(()=>{
            toast.success("Sign in successful");
            e.target.reset();
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then((res)=>{
            <Navigate to={"/register"}></Navigate>
            toast.success("SignIn successful");
            console.log(res);
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }

  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
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
