import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LetsLearn = () => {
    const { user } = useContext(AuthContext);
    const lesson = useLoaderData();
    console.log(lesson);
    return (
        <div>
            <h2 className="text-center mb-4 md:mb-8 py-4 text-2xl md:text-4xl font-semibold">
                Let&apos;s Learn
            </h2>
            <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16 lg:mb-28">
                {
                    lesson.map((data)=> <Link 
                    key={data.word}
                    to={user ? `/lesson/${data.lesson_no}` : "/login"}
                     className="bg-white text-center font-bold text-xl md:text-2xl md:col-span-4 lg:col-span-3 col-span-6 px-8 w-full py-4 rounded-md shadow-md shadow-blue-950">Lesson-{data.lesson_no}</Link>)
                }

            </div>
            <div className="mb-8">
                <h2 className="text-center mb-4 font-semibold text-xl md:text-2xl">Learn with Alphabets Online tutorials</h2>
                <div className="mb-6">
                    <iframe className="w-full mx-auto md:w-[400px] lg:h-[500px] lg:w-[700px]"
                    height={"300px"}
                    src="https://www.youtube.com/embed/dlazjKbt40Q?si=aMPwcElVYS4nLCtX" frameBorder="0"></iframe>
                </div>
                <div className="text-center">
                    <Link to={user ? "/tutorial" : "/login"} className="bg-blue-950 text-white font-semibold px-5 py-3 rounded-md">View More</Link>
                </div>
            </div>
        </div>
    );
};

export default LetsLearn;