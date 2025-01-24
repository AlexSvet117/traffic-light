import React, { useState } from 'react';

function TrafficLight() {

  // State to track which circle has the white shadow class
  const [activeCircle, setActiveCircle] = useState(null)

  // Function to toggle the shadow on click
  const handleCircleClick = (color) => {
    if (activeCircle === color) {
      setActiveCircle(null); // Deselect if the same circle is clicked again
    } else {
      setActiveCircle(color); // Set the active circle
    }
  };

  return (
  <div className="d-flex flex-column flex-md-row p-1 mt-lg-5 gap-4 py-md-1 justify-content-center align-items-center bg-black rounded-4">
    <div className="list-group">
        <div 
        className={`rounded-circle bg-danger m-1 ${activeCircle === 'red' ? 'white-shadow' : ''}`}
        style={{ width: '100px', height: '100px' }}
        onClick={() => handleCircleClick('red')}
        ></div>
        <div 
        className={`rounded-circle bg-warning m-1 ${activeCircle === 'yellow' ? 'white-shadow' : ''}`}
        style={{ width: '100px', height: '100px' }}
        onClick={() => handleCircleClick('yellow')}
        ></div>
        <div 
        className={`rounded-circle bg-success m-1 ${activeCircle === 'green' ? 'white-shadow' : ''}`}
        style={{ width: '100px', height: '100px' }}
        onClick={() => handleCircleClick('green')}
        ></div>
    </div>
  </div>

  )
}

export default TrafficLight
