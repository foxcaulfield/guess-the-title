import "./App.css";
import Field from "./components/Field/Field";
import { Provider } from "react-redux";
import store from "./store/reduxStore";

//render the app and provide it with a store
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Guess the title</h1>
        <p>
          There is a hidden marker in one of the titles. Try to guess where it
          is.
          
          <Field></Field>
        </p>
      </div>
    </Provider>
  );
}

export default App;
