import { Link } from "react-router-dom";
import { IoBookmarks } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const { list } = useSelector((store) => store);
  return (
    <div className="mb-10 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.svg" alt="neflix logo" className="max-w-[150px] " />
      </Link>
      <Link
        to="/watch-list"
        className="flex items-center gap-5  hover:text-gray-300 transition"
      >
        <div className="relative">
          <IoBookmarks className="text-blue-500 hover:text-blue-400 text-xl" />
          <span className="absolute  top-[-10px] right-[-10px] bg-[#db202c] size-5 grid place-items-center rounded-full text-sm font-semibold ">
            {list.length}{" "}
          </span>
        </div>
        İzleme Listesi
      </Link>
    </div>
  );
};

export default Header;
