import axios from "axios";

//User profile
 async function getUserData(token) {
  try {
    return await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization : `Bearer ${token}`
      },
    });
  } catch (e) {
    console.log("Error getting the token", e);
  }
}



export {getUserData }