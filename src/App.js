import logo from "./logo.svg";
import "./App.css";
import MapComponent from "./components/MapView";
import AddDestinationForm from "./components/AddDestinationForm";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  return (
    <div className="App">
      <AddDestinationForm />
      <MapComponent />
    </div>
  );
}

export default App;
