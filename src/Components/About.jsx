import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import CountUp from 'react-countup';
import ClientSay from "./ClientSay";
import Blogs from "./Blogs";
import mission from "../assets/mission.png"

const About = () => {
    return (
        <div>
            <div className="flex justify-center items-center mb-8">
                <hr className="border border-black w-full"/>
                <h1 className="font-semibold text-xl md:text-3xl mb-4 text-center w-[80%] md:w-[35%] ">About Us</h1>
                <hr  className="border border-black w-full"/>
            </div>
            <div className="bg-blue-950 text-white p-4 lg:p-8 mb-8">
                <div className="flex gap-1">
                <ImQuotesLeft className="text-3xl lg:7xl"></ImQuotesLeft>
                <ImQuotesRight className="text-3xl lg:7xl mt-2"></ImQuotesRight>
                </div>
                <div className="flex flex-col-reverse md:items-center md:justify-between md:flex-row">
                    <p className="md:text-lg lg:text-2xl lg:w-[80%]">
                        Our mission is to make learning words simple, engaging, and effective. We believe that expanding your vocabulary is the key to unlocking better communication, improved confidence, and endless opportunities in life.
                    </p>
                    <img className="w-[70%] md:[40%]" src={mission} alt="mission image" />
                </div>
            </div>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-xl mb-4 md:text-2xl md:text-center font-semibold">How we Help ?</h2>
                <p className="lg:w-[60%] text-center text-lg mx-auto">
                With innovative learning tools and personalized features, we empower users to learn new words at their own pace. From daily challenges to interactive quizzes, we make vocabulary building a fun and rewarding journey.
                </p>
            </div>

            <div className="mb-8 lg:mb-16">
                <h2 className="text-center text-2xl font-semibold lg:text-3xl mb-6">Our Success</h2>
                <div className="md:grid grid-cols-12 gap-4">
                    <div className="md:col-span-6 text-center lg:col-span-3 p-4 lg:p-6 rounded-md bg-gradient-to-tr mb-4 from-orange-100 to-orange-600">
                        <p className="text-2xl font-semibold text-white mb-2">Our User</p>
                        <CountUp className="text-4xl text-white font-bold" end={4000}/>
                    </div>
                    <div className="md:col-span-6 text-center lg:col-span-3 p-4 lg:p-6 bg-gradient-to-tr mb-4 from-blue-50 to-blue-600 rounded-md">
                        <p  className="text-2xl font-semibold text-white mb-2">Total Lesson</p>
                        <CountUp className="text-4xl text-white font-bold" end={2000}/>
                    </div>
                    <div className="md:col-span-6 text-center lg:col-span-3 p-4 lg:p-6 bg-gradient-to-tr mb-4 from-purple-50 to-purple-600 rounded-md">
                        <p className="text-2xl font-semibold text-white mb-2">Total Vocabulary</p>
                        <CountUp className="text-4xl text-white font-bold" end={5000}/>
                    </div>
                    <div className="md:col-span-6 text-center lg:col-span-3 p-4 lg:p-6 bg-gradient-to-tr mb-4 from-green-50 to-green-600 rounded-md">
                        <p className="text-2xl font-semibold text-white mb-2">Total Tutorials</p>
                        <CountUp className="text-4xl text-white font-bold" end={2200}/>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">Our Happy Clients Say</h2>
            <div className="md:grid grid-cols-12 gap-4 mb-8 lg:mb-16">
                <ClientSay></ClientSay>
            </div>
            <div>
                <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">Read Our Latest Blog Post and Articles</h2>
                <Blogs></Blogs>
            </div>
        </div>
    );
};

export default About;