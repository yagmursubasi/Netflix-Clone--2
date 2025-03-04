import { MdBookmarkAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleList } from "../../redux/actions";
import { GoBookmarkSlashFill } from "react-icons/go";

const SaveButton = ({ movie }) => {
  const { list } = useSelector((store) => store);
  const dispatch = useDispatch();

  //prop olarak gelen film store`da var mı ?
  const isAdded = list.find((item) => item.id === movie.id);

  const handleClick = () => {
    dispatch(toggleList(movie, !isAdded));
  };
  console.log("selam", movie);
  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded gap-2 cursor-pointer"
    >
      {isAdded ? (
        <>
          {" "}
          <GoBookmarkSlashFill className="text-xl" /> Listeden Kaldır{" "}
        </>
      ) : (
        <>
          {" "}
          <MdBookmarkAdd className="text-xl" /> Listeye Ekle
        </>
      )}
    </button>
  );
};

export default SaveButton;
