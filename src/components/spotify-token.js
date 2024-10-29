import axios from "axios";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:5173/";
const clientId = "58b9a99f4b4146ffb2e52326dc17c065";
const clientSecret = 'e2ac62a9e6a14fe2b460377dd270d571';


const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-playback-position",
  "user-library-read",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;



// refreshing the token

export async function refreshAccessToken(refreshToken) {
  const url = 'https://accounts/spotify.com/api/token';
  
  
  // data to be sent
  const data = new URLSearchParams();
  data.append('grant_type',"refresh_token");
  data.append('refresh_token',refreshToken);


  //header
  const headers= {
    'content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}` 
  };

  try {
    const response = await axios.post(url,data,{ headers });
    console.log('New Access TOken:' , response.data.access_token);
    return response.data.access_token; // returns new access token
  }

  catch(e){
    console.log('error refreshing access token:', e);
    throw e;
  }
}

