import {
  generateCodeVerifier,
  generateCodeChallenge,
} from "@/utils/spotifyAuth";

export function useSpotify() {
  const fetchProfile = async (token) => {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (result.status === 401) {
      localStorage.removeItem("access_token");
      location.reload();
      return;
    }

    return await result.json();
  };

  const redirectToAuthCodeFlow = async (clientId, redirectUri) => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      scope: "user-read-private user-read-email",
      code_challenge_method: "S256",
      code_challenge: challenge,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return {
    fetchProfile,
    redirectToAuthCodeFlow,
  };
}
