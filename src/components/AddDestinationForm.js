import React, { useState } from "react";

const AddDestinationForm = ({ onAddDestination }) => {
  const [destination, setDestination] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (destination.trim()) {
      onAddDestination(destination);
      setDestination(""); // Clear the input field after submission
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
