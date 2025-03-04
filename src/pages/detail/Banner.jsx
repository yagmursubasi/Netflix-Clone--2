import { baseImgUrl } from "../../constants/index";

const Banner = ({ movie }) => {
  return (
    <div className="h-[30vh] md:h-[50vh]  relative drop-shadow-[0_0_80px_rgba(255,255,255,0.2)] ">
      <img
        src={baseImgUrl + movie.backdrop_path}
        alt=""
        className="size-full  object-cover rounded-sm"
      />
      <div className=" absolute inset-0 bg-black/30 grid place-items-center ">
        <h2 className="text-3xl md:text-4xl font-semibold font-mono text-center">
          {movie.title}{" "}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
