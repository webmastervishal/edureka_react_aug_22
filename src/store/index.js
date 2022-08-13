import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import currencyReducer from "./../components/CurrencyConversion/reducer";
import rootSagas from "./sagas";

const rootReducer = combineReducers({
  currency: currencyReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export { store };
