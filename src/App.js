import "./App.css";
import Field from "./components/Field/Field";
import { Provider } from "react-redux";
import store from "./store/reduxStore";

//render the app and provide it with a store
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="containerSecondary">
          <h1>Guess the title</h1>
          <h4>
            There is a hidden marker in one of the titles. Try to guess where it
            is. Start count your steps from 🏁
          </h4>
        </div>

        <Field></Field>
      </div>
    </Provider>
  );
}

export default App;
