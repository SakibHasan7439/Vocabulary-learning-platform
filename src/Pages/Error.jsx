import { Link } from "react-router-dom";
import errorImage from "../assets/errorImage.jpg"
import { Helmet } from "react-helmet-async";

const Error = () => {
    return (
        <div className="flex justify-center items-center relative h-screen">
            <Helmet>
                <title>lingo bingo | Not found</title>
            </Helmet>
            <img src={errorImage} alt="error image" />
            <Link to={"/"} className="bg-white hover:bg-slate-100 absolute top-[60%] lg:top-[70%] text-black px-5 py-2 rounded-md">
                Go Back
            </Link>
        </div>
    );
};

export default Error;