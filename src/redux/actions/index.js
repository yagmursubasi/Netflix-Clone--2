import api from "../../api";
import ActionTypes from "../reducers/actionTypes";

//apiden izleme listeindeki filmleri al reducer a durumu haber verecek asenkron fonksiyonu
export const getWatchList = () => (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });
  api
    .get(`/account/21839317/watchlist/movies?language=tr`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};
//filmi izleme listesine ekleyip  listeyi atıp başarılı olursa reducera haber verecek fonksiyon
export const toggleList = (movie, isAdd) => (dispatch) => {
  //body içeriğini hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };
  //api istek at
  api
    .post(`/account/21839317/watchlist`, body)
    .then(() => {
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};
