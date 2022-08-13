import { all } from "redux-saga/effects";
import currencySaga from "./../components/CurrencyConversion/saga";

export default function* rootSagas() {
  yield all([currencySaga()]);
}
