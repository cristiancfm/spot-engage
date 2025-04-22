export function useSpotify() {
  const fetchProfile = async (token) => {
    return $fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const fetchQueue = async (token) => {
    return $fetch("https://api.spotify.com/v1/me/player/queue", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const fetchTracks = async (token, searchText) => {
    return $fetch("https://api.spotify.com/v1/search", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: searchText,
        type: "track",
        limit: 10,
      },
    });
  };

  return {
    fetchProfile,
    fetchQueue,
    fetchTracks,
  };
}
