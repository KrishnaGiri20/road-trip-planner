import React, { useState } from "react";

const AddDestinationForm = ({
  newDestination,
  setNewDestination,
  addDestination,
}) => {
  //   const [destination, setDestination] = useState("");

  //   const onSubmitHandler = (e) => {
  //     e.preventDefault();
  //     if (destination.trim()) {
  //       onAddDestination(destination);
  //       setDestination(""); // Clear the input field after submission
  //     }
  //   };

  return (
    <div>
      <form onSubmit={addDestination}>
        <input
          type="text"
          placeholder="Enter Destination"
          value={newDestination}
          onChange={(e) => setNewDestination(e.target.value)}
          required
        />
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
