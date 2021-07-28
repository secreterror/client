import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer"

import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware=createSagaMiddleware();

const middleware=[...getDefaultMiddleware({ thunk: false }),sagaMiddleware];

const store=configureStore({reducer,middleware})

sagaMiddleware.run(watcherSaga)


export default store;
