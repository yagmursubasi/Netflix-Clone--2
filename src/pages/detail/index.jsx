import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import Banner from "./Banner";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SaveButton from "../../components/savebtn";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
      language: "tr-TR",
    };
    api
      .get(`movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err));
  }, []);
  if (error) return <Error info={error.message} />;
  if (!movie) return <Loader />;

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <Link
          to={-1}
          className="flex items-center bg-[#555c6a] px-5 py-2 text-white rounded gap-2 cursor-pointer"
        >
          <MdKeyboardArrowLeft />
          Geri
        </Link>
        <SaveButton movie={movie} />
      </div>
      <Banner movie={movie} />
      <Content movie={movie} />
      <ActorList actors={movie.credits.cast} />
      <VideoList videos={movie.videos.results} />
    </div>
  );
};

export default Detail;
