import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Tutorials = () => {
    return (
        <div>
            <Helmet>
                <title>lingo bingo | Tutorials</title>
            </Helmet>
            <h2 className="text-center text-2xl font-semibold md:text-3xl py-4 mb-6 md:mb-8 lg:mb-16">
                Alphabet Adventure
            </h2>
            <div className="grid grid-cols-12 gap-4 mb-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/dlazjKbt40Q?si=g5fXPvM2iGdLWKJy"
                     ></iframe>
                     <h3 className="md:text-xl font-semibold">1. Introduction to Spanish Alphabet</h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/Bu7QVKIop8A?si=xHKhj-J2jsAEQIEr"
                     ></iframe>
                     <h3 className="md:text-xl font-semibold">2. Spanish Alphabet-Vowels</h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4 font-semibold">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/dg9i1VOww_I?si=s3ZDY04jkMQwb1JT"
                     ></iframe>
                     <h3 className="md:text-xl font-semibold">3. Spanish Alphabet-Consonants</h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/VHPTNSabTfI?si=ZGxf-VrITLEgv-VM"
                    ></iframe>
                     <h3 className="md:text-xl font-semibold">4. Accents in Spanish</h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/aDwq0PhPZUY?si=zvYmJj6x2OHnCZ5n"
                    ></iframe><h3 className="md:text-xl font-semibold">5. The use of capital letters in Spanish</h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/IDHLnP_dME8?si=4ghJio0KCxEEWfn-"
                    ></iframe>
                     <h3 className="md:text-xl font-semibold">6. Using Spanish Articles and Understanding Genders</h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/UyZipckMpTM?si=M_-ThjpeI8pTLF2G"
                    ></iframe>
                     <h3 className="md:text-xl font-semibold">7.Gender pecularities in Spanish </h3>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <iframe className="w-full"
                    height={"300px"}
                    src="https://www.youtube.com/embed/-2r6glgFvI0?si=Omj1HZ-k0-tb8nT0" title="YouTube video player"
                    ></iframe>
                     <h3 className="md:text-xl font-semibold">8. Forming Plurals in Spanish</h3>
                </div>
            </div>

            <Link className="font-semibold block md:text-lg mb-8 mx-auto text-center w-[200px] px-2 py-4 rounded-md bg-yellow-300 hover:bg-yellow-400" to={"/learn"}>Learn Vocabularies</Link>
        </div>
    );
};

export default Tutorials;