import { Link } from "react-router-dom";

const VocabularyCard = ({ lesson }) => {
  const {
    word,
    meaning,
    pronunciation,
    part_of_speech,
    when_to_say,
    example,
    difficulty,
  } = lesson;

  const handleClick = () =>{
    const value = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(value);
  }

  return (
    <div className="col-span-12 mb-8 md:col-span-4 lg:col-span-3">
      <div onClick={handleClick}
        className={`card shadow-lg cursor-pointer rounded-md ${
          difficulty === "difficult"
            ? "bg-red-300 shadow-red-400"
            : difficulty === "medium"
            ? "bg-yellow-300 shadow-yellow-400"
            : "bg-green-300 shadow-green-400"
        }`}
      >
        <div className="card-body h-[268px]">
          <h2 className="card-title text-black">Word: {word}</h2>
          <p className="font-semibold">Meaning: {meaning}</p>
          <p className="font-semibold">Pronunciation: {pronunciation}</p>
          <p className="font-semibold">Part of speech: {part_of_speech}</p>
          <div className="card-actions justify-start">
            <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn bg-white text-black">When to say</button>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Word: {word}</h3>
          <p>
            Meaning: {meaning}
          </p>
          <p>When to say: {when_to_say}</p>
          <p>Example: {example}</p>
          <div className="modal-action justify-center">
            <form method="dialog">
              <Link to={"/learn"} className=" bg-blue-950 text-white px-6 py-3 rounded-md">Back to lesson</Link>
              <span className="mx-4">Or</span>
              <button className="px-6 rounded-md py-3 bg-blue-950 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VocabularyCard;
