import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();

export const setAccessToken = () => {
  const token = sessionStorage.getItem("spotify_token");
  if (token) {
    spotifyApi.setAccessToken(token);
  }
};

//get userId
export const getUserData = () => {
  return spotifyApi.getMe().then(
    function (data) {
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
      return data.items;
    },
    function (e) {
      console.log("error getting top artist", e);
    }
  );
};

// new releases
export const getNewRelease = ()  =>{
  return spotifyApi.getNewReleases().then(
    function (data){
      return data.albums.items;
    },
    function(e){
      console.log('error fetching new release',e)
    }
  )
}

//top tracks
export const getTopTracks = () =>{
  return spotifyApi.getMyTopTracks().then(
    function (data){
      return data.items
    },
    function(e){
      console.log('error fetching top artist',e)
    }
  )

}


//featured playlist
export const getFeaturedlist = () =>{
  return spotifyApi.getFeaturedPlaylists().then(
   function(data){
    return (data.playlists.items)
   },
   function(e){
    console.log('error fetching getFeatured list',e)
   }
  )
}