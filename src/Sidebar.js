import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="History" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {/* playlist that i will get from spotify have items as its attrbute
      .we fetch each element from that item and and that item has name property
      */}
      {playlists?.items?.map((playlist) => (
        <SideBarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
