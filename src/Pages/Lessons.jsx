import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import VocabularyCard from "../Components/VocabularyCard";

const Lessons = () => {
    const data = useLoaderData();
    const { lesson_no } = useParams();
    const [lessonData, setLessonData] = useState([]);

    useEffect(()=>{
        if(lesson_no){
            const filteredData = data.filter((matchedData)=> matchedData.lesson_no == lesson_no);
            setLessonData(filteredData);
        }

    }, []);
    
    return (
        <div>
            <h2 className="text-center py-4 text-2xl md:text-4xl font-semibold">Lesson-{lesson_no}</h2>
            <div className="grid grid-cols-12 gap-4">
                {
                    lessonData.map((data)=><VocabularyCard 
                        key={data.id}
                        lesson={data}>  
                    </VocabularyCard>)
                }
            </div>
        </div>
    );
};

export default Lessons;