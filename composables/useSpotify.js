export function useSpotify() {
  const fetchProfile = async (token) => {
    return $fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return {
    fetchProfile,
  };
}
