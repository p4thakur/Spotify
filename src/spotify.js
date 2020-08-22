// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "6578cf2ed426403097db7584de9937a5";
///this is uRl where i want to go after i click on agrre /after login
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromReponseUrl = () => {
  //window.location.hash--> it goes to url where location is and than get its hash value
  return window.location.hash
    .substring(1) //1 st suvstring
    .split("&") // get first paramter
    .reduce((initial, item) => {
      //right now at this point i got  item like : token=decodedTooken
      let parts = item.split("="); //now i will get left and right side
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {}); //second parameter is initial value of initial={}
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&
redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//response_type=token  return token on succesful authentication
//show_dialog=true  it give you prompt....
