import "./App.css";
import MapComponent from "./components/MapView";
import AddDestinationForm from "./components/AddDestinationForm";
import { useEffect, useState } from "react";
// import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // const [destinations, setDestinations] = useLocalStorage("destinations", []);
  const [destinations, setDestination] = useState([]);
  const [newDestination, setNewDestination] = useState("");

  useEffect(() => {
    const storedDestinations = localStorage.getItem("destinations");
    if (storedDestinations) {
      setDestination(storedDestinations);
    }
  });

  const addDestination = (e) => {
    console.log("the evetni", e);
    e.preventDefault();
    if (newDestination.trim() !== "") {
      const updatedDestinations = [...destinations, newDestination];
      setDestination(updatedDestinations);
      localStorage.setItem("destinations", JSON.stringify(updatedDestinations));
      setNewDestination(""); //clear the input field after adding
    }
  };
  return (
    <div className="App">
      <h1>Road Trip Planner</h1>
      <AddDestinationForm
        newDestination={newDestination}
        setNewDestination={setNewDestination}
        addDestination={addDestination}
      />
      <MapComponent
        destinations={["pune", "delhi", "chennai", "kochi", "jaipur"]}
      />
    </div>
  );
}

export default App;
