export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  imagin_dragon: null,
  token: null,
  //for debugging purpose I don't wanna  login again and again so set its token here.
  //   token:
  //     "BQDqtFfIabpn6ngnwJXL6FsboejP99zpqBwJCoGuy84pK0o9m4YV8_rGGdT3C8bbBZqNs4ldgJftpLl1E9ZwptYr-yeUcS_A6Fvm7iCtbTCA8QfLpss1VWt6xEtLS_jdeNuHHR57fufiwfig6isWEu09CQoKIVu2fHEaWaN7xculXIsVDsxO",
};

//stae and mu actions
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      //kepp whatever in state, change user to action.user
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_IMAGINE_DRAGON":
      return {
        ...state,
        imagin_dragon: action.imagin_dragon,
      };
    default:
      return state; //if nothing change return intitail state
  }
};

export default reducer;
