import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      {/* Add links to other routes/components */}
    </div>
  );
}

export default Footer;
