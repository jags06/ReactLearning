import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, SetX] = useState(0);
  const [y, SetY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    SetX(e.clientX);
    SetY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
    // for use Effect cleanup
    return () => {
      console.log("component UnMounting Code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y- {y}
    </div>
  );
}

export default HookMouse;
