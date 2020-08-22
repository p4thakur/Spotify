import React from "react";
import "./SideBarOption.css";

function SideBarOption({ title, Icon }) {
  return (
    <div className="sidebaroption">
      {/* Below stps says if there is an icon  than(&&) render it using classname */}
      {Icon && <Icon className="sidebaroption_icon" />}
      {/* If icon hai than show the title in bold    */}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
