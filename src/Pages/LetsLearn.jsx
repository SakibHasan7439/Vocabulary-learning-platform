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
            <div className="grid grid-cols-12 gap-4">
                {
                    lesson.map((data)=> <Link 
                    key={data.word}
                    to={user ? `/lesson/${data.lesson_no}` : "/login"}
                     className="bg-white text-center font-bold text-xl md:text-2xl md:col-span-4 lg:col-span-3 col-span-6 px-8 w-full py-4 rounded-md shadow-md shadow-blue-950">Lesson-{data.lesson_no}</Link>)
                }

            </div>
        </div>
    );
};

export default LetsLearn;