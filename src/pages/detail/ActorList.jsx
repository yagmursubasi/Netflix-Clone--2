import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "../../constants";

const ActorList = ({ actors }) => {
  console.log(actors);
  return (
    <div className="mb-10">
      <h2 className="text-lg md:text-xl my-5 font-semibold">Oyuncular</h2>
      <Splide
        aria-label="My Favorite Images"
        options={{
          autoWidth: true,
          gap: "20px",
          pagination: false,
        }}
      >
        {actors.map((actor, key) => {
          const url = actor.profile_path
            ? baseImgUrl + actor.profile_path
            : actor.gender === 1
            ? "/woman.jpg"
            : actor.gender === 2
            ? "/man.jpg"
            : "/default.webp";
          return (
            <SplideSlide key={key}>
              <div className="h-full w-[160px] flex flex-col ">
                <img
                  src={url}
                  alt=""
                  className=" h-full object-cover cursor-pointer rounded transition hover:scale-[1.01]  "
                />
                <h2 className="text-center font-semibold mt-2">
                  {actor.name}{" "}
                </h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ActorList;
