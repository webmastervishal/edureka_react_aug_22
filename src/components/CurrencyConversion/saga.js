import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import Cookies from "js-cookie";

function* fetchAPI(path) {
  const res = yield fetch(`https://webmaster-fake-api.herokuapp.com/${path}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    },
  });
  const result = yield res.json();
  return result;
}

//worker saga
function* fetchCurrencies(action) {
  //   console.log("...fetching currencies....");
  const result = yield call(fetchAPI, "currencies");
  //   console.log("result", result);
  yield put({
    type: actions.STORE_CURRENCIES,
    payload: result,
  });
}

//watcher saga
export default function* watcherSaga() {
  //   yield takeLatest(actions.fetchCurrencies, fetchCurrencies); //THIS CODE WAS NOT WORKING
  yield takeLatest(actions.FETCH_CURRENCIES, fetchCurrencies);
  //The above line is working, instead of action type `actions.FETCH_CURRENCIES` I was calling entire action creater i.e actions.fetchCurrencies
}
