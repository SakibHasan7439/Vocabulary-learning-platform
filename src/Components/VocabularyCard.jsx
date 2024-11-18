const VocabularyCard = ({ lesson }) => {
    console.log(lesson);
  const {
    word,
    meaning,
    pronunciation,
    part_of_speech,
    when_to_say,
    example,
    difficulty
  } = lesson;

  return (
    <div className={`card border rounded-md ${difficulty === "difficult" ? "bg-red-500": difficulty === "medium" ? "bg-yellow-200" : "bg-green-500"} col-span-12 md:col-span-4 lg:col-span-3`}>
      <div className="card-body">
        <h2 className="card-title text-black">Word: {word}</h2>
        <p className="font-semibold">Meaning: {meaning}</p>
        <p className="font-semibold">Pronunciation: {pronunciation}</p>
        <p className="font-semibold">Part of speech: {part_of_speech}</p>
        <div className="card-actions justify-start">
          <button className="btn bg-blue-950 text-white">When to say</button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;
