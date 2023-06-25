import React from "react";

var CurretYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p className="footer"> Copyright {CurretYear}</p>
    </footer>
  );
}
export default Footer;
