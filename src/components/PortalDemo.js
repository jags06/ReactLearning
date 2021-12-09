import React from "react";
import reactDom from "react-dom"

function PortalDemo() {
  return reactDom.createPortal( <h1>Portal Demo</h1>,document.getElementById('portal-root'))
}

export default PortalDemo;
