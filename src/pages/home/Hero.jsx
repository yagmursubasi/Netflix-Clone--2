import { useEffect, useState } from "react";
import api from "../../api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../constants";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  //popüler
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        //filmler dizisi
        const movies = res.data.results;
        //0-1 arasında rastgele film seç
        const i = Math.floor(Math.random() * movies.length);
        //seçilen filmi setMovie ile state'e ekle
        setMovie(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);
  if (error) return <Error message={error} />;

  if (!movie) return <Loader />;
  console.log(movie);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[400px] -scroll-mb-10 ">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold">{movie.title} </h1>
        <p className="text-start text-gray-300">{movie.overview} </p>
        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(1)}
          </span>
        </p>
        <div className="flex gap-5">
          <Link
            className="p-2 bg-red-600 rounded transition hover:bg-red-700 px-4 py-2 cursor-pointer"
            to={`/movie/${movie.id}`}
          >
            Filmi İzle{" "}
          </Link>
          <button className="p-2 bg-blue-600 rounded transition hover:bg-blue-700 px-5 py-2 cursor-pointer">
            Kaydet
          </button>
        </div>
      </div>
      <div>
        <img
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]  my-4 object-contain rounded max-h-[300px] "
          src={baseImgUrl + movie.backdrop_path}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
