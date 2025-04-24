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

  const submitTrackToQueue = async (token, trackUri) => {
    return $fetch(
      `https://api.spotify.com/v1/me/player/queue?uri=${encodeURIComponent(trackUri)}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  };

  const fetchCurrentlyPlayingTrack = async (token) => {
    return $fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const startPlayback = async (token) => {
    return $fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        position_ms: 0,
      },
    });
  };

  const pausePlayback = async (token) => {
    return $fetch("https://api.spotify.com/v1/me/player/pause", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const skipToNextTrack = async (token) => {
    return $fetch("https://api.spotify.com/v1/me/player/next", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return {
    fetchProfile,
    fetchQueue,
    fetchTracks,
    submitTrackToQueue,
    fetchCurrentlyPlayingTrack,
    startPlayback,
    pausePlayback,
    skipToNextTrack,
  };
}
