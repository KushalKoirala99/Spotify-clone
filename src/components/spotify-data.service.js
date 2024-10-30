import axios from "axios";

export async function getUserData(token) {
  try {
    return await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
