import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [dotCoords, setDotCoords] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  function handleMouseMove(e) {
    setCoords({ x: e.clientX, y: e.clientY });
    setIsMoving(true);
  }

  useEffect(() => {
    let animationId;

    function animateDot() {
      const newDotCoords = {
        x: dotCoords.x + (coords.x - dotCoords.x) / 10,
        y: dotCoords.y + (coords.y - dotCoords.y) / 10,
      };

      setDotCoords(newDotCoords);

      if (
        Math.abs(newDotCoords.x - coords.x) > 1 ||
        Math.abs(newDotCoords.y - coords.y) > 1
      ) {
        animationId = requestAnimationFrame(animateDot);
      } else {
        setIsMoving(false);
      }
    }

    if (isMoving) {
      animationId = requestAnimationFrame(animateDot);
    } else {
      setDotCoords(coords);
    }

    return () => cancelAnimationFrame(animationId);
  }, [coords, dotCoords, isMoving]);

  const dotStyle = {
    position: "absolute",
    top: `${dotCoords.y - 5}px`,
    left: `${dotCoords.x - 5}px`,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "black",
  };

  return (
    <div className="app-container" onMouseMove={handleMouseMove}>
      <div style={dotStyle}></div>
    </div>
  );
}

export default MouseTracker;
