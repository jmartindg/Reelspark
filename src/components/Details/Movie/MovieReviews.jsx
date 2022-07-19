import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import NoAvatar from "../../../assets/no-avatar.jpg";
import ReadMore from "../ReadMore";
import NoReviews from "../NoReviews";

const getReviews = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
  );
  return res.data.results;
};

const Reviews = () => {
  let { id } = useParams();
  const { data, status } = useQuery(["reviews", id], () => getReviews(id), { refetchOnWindowFocus: false });
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <section className="mb-10 md:mb-0">
      <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2 mb-4">Reviews</h2>

      {status === "success" &&
        (data.length === 0 ? (
          <NoReviews />
        ) : (
          data
            .map((review) => (
              <section key={review.id} className="flex flex-col">
                <article className="mt-4 bg-[#131312] rounded p-6">
                  <header className="flex items-center space-x-4">
                    {!review.author_details.avatar_path === null ? (
                      <img
                        src={imgUrl + review.author_details.avatar_path}
                        className="w-12 rounded-full"
                        alt={review.author}
                      />
                    ) : (
                      <img src={NoAvatar} className="w-12 rounded-full object-cover" alt={review.name} />
                    )}

                    <div>
                      <h4 className="font-bold text-lg">{review.author}</h4>
                      <p className="text-sm">Posted on {new Date(review.created_at).toLocaleDateString("en-US", options)}</p>
                    </div>
                  </header>
                  <div className="pt-4 text-gray-50 font-light">
                    {review.content.length < 300 ? (
                      review.content
                    ) : (
                      <ReadMore maxCharacterCount={300}>{review.content}</ReadMore>
                    )}
                  </div>
                </article>
              </section>
            ))
            .slice(0, 3)
        ))}
    </section>
  );
};

export default Reviews;
