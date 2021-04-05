// import logo from './logo.svg';
import "./App.css";
import Field from "./components/Field/Field";

function App() {
  return (
    <div>
      <h1>Guess the title</h1>
      <p>
        There is a hidden marker in one of the titles. Try to guess where it is.
        <Field></Field>
      </p>
    </div>
  );
}

export default App;
