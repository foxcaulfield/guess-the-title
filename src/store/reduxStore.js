import { createStore } from "redux";
import fieldReducer from "./reducers/fieldReducer";

//create the store
const store = createStore(fieldReducer);

window.store = store;

export default store;
