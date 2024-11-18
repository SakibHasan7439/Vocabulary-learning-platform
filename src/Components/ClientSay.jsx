import { useEffect, useState } from "react";

const ClientSay = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("/review.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

  return (
    reviews.map((review)=>  <div key={review.user} className="card rounded-md border border-black md:col-span-6 lg:col-span-4">
    <div className="card-body">
      <div className="flex items-center justify-between">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="bg-gray-300 px-4 py-1 rounded-2xl text-black">{review.user}</div>
      </div>
      <p>
        {review.comment}
      </p>
    </div>
  </div>)
  )
};

export default ClientSay;
