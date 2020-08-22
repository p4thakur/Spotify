import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ imagin_dragon }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={imagin_dragon?.images[0].url} alt="" />
        <div className="basic_infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{imagin_dragon?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_playcircle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/**List of songs*/}
        {imagin_dragon?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
