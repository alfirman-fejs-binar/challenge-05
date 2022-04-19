import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./carsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ carsReducer });

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const globalStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(globalStore);

export { globalStore, persistor };
