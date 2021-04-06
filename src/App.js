import "./App.css";
import Field from "./components/Field/Field";
import { Provider } from "react-redux";
import store from "./store/reduxStore";

//render the app and provide it with a store
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div>
          <div>
            <h1>Guess the title</h1>
            There is a hidden marker in one of the titles. Try to guess where it
            is. Start count your steps from 🏁
          </div>
          <Field></Field>
        </div>
      </div>
    </Provider>
  );
}

export default App;
