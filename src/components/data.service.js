import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();

export const setAccessToken = ()=>{
  const token = sessionStorage.getItem('spotify_token')
  if(token){
    spotifyApi.setAccessToken(token);
  }
 
}

//get userdata
export const getUserData = () => {
  return spotifyApi.getMe().then(
    function (data) {
      // console.log("User info", data);
      return data;
    },
    function (e) {
      console.error("error fetching data ",e);
    }
  );
};


//get playlist 




