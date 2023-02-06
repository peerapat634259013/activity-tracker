import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import activitiesReducer from "./reducers/activitiesReducer";
import rootReducer from "./reducers/rootReduce";

const store = configureStore({
    reducer:{
        activities: activitiesReducer
    }
}, composeWithDevTools);

export default store;
