import React, { useEffect, useState } from "react";
import Login from "./Login";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import { getTokenFromReponseUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";

//global obeject

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null); //initial value of token=null

  const [{ user, token }, dispatch] = useDataLayerValue();

  ///useEffect run code based on some consition
  //we want out token to load when my localhost hit . and rember I have added the
  //localhost url in my redurect url of spotify
  useEffect(() => {
    const hash = getTokenFromReponseUrl();
    //now clear the token from broswer URL so that client can't see this
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("token", _token);

    if (_token) {
      //setToken(_token);
      //save to Data layer
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //this allow me to comunnicate with spotify api

      spotify.getMe().then((user) => {
        //console.log("ddd", user);
        //put use rin data layer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        //lets put user playlist in our data layer
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("6wh1iovFIa3f0HOfu1FyVn").then((response) => {
        dispatch({
          type: "SET_IMAGINE_DRAGON",
          imagin_dragon: response,
        });
      });
    }
  }, []);

  console.log("User :)", user);
  console.log("token", token);

  return (
    <div className="App">
      {/*Spotify logo*/}
      {/* login with spotify butoon */}

      {/* //if token is there than render the player page else go to login */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
