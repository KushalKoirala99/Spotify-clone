import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();

export const setAccessToken = () => {
  const token = sessionStorage.getItem("spotify_token");
  if (token) {
    spotifyApi.setAccessToken(token);
  }
};

//get userdata
export const getUserData = () => {
  return spotifyApi.getMe().then(
    function (data) {
      // console.log("User info", data);
      return data;
    },
    function (e) {
      console.error("error fetching user data ", e);
    }
  );
};

//get playlist
export const getUserPlaylist = (userid) => {
  return spotifyApi.getUserPlaylists(userid).then(
    function (data) {
      // console.log(data.items)
      return data.items;
    },
    function (e) {
      console.log("error getting user playlist", e);
    }
  );
};

//top Artist
export const getTopArtist = () => {
  return spotifyApi.getMyTopArtists().then(
    function (data) {
      console.log(data.items);
      return data.items;
    },
    function (e) {
      console.log("error getting top artist", e);
    }
  );
};
