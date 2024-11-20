import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import userImg from "../assets/user.png"

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center font bold my-6">
        Welcome {user.displayName}
      </h2>
      <div className="md:w-[50%] lg:w-[30%] rounded-lg shadow-lg shadow-sky-800 mx-auto text-center my-6 bg-blue-300 py-16">
        <img
          className="w-20 h-20 object-cover mx-auto rounded-full"
          src={user?.photoURL ? user.photoURL : userImg}
          alt="user image"
        />
        <p className="md:text-xl text-sky-950 font-semibold">{user.displayName}</p>
        <p className="md:text-xl text-sky-950 mb-6 font-semibold">{user.email}</p>
        <Link to={"/updateUser"} className="bg-sky-700 block mx-auto w-[80%] px-6 py-2 rounded-lg text-white">Update Profile</Link>
      </div>
    </div>
  );
};

export default Profile;
