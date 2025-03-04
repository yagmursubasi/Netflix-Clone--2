import { useEffect, useState } from "react";
import Hero from "./Hero";
import api from "../../api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import MovieList from "./MovieList";

const Home = () => {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=tr-TR")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Hero />
      {error ? (
        <Error info={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        <div className="pt-[200px] lg:pt-[80px] md:pt-[100px]  ">
          {genres?.map((i) => (
            <MovieList key={i.id} genre={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
