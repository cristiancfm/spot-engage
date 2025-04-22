function _generateCodeVerifier(length = 128) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    possible.charAt(Math.floor(Math.random() * possible.length)),
  ).join("");
}

async function _generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getAccessToken({
  clientId,
  code,
  redirectUri,
  verifier,
}) {
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", redirectUri);
  params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const data = await result.json();
  return data.access_token;
}

export async function redirectToAuthCodeFlow(clientId, redirectUri) {
  const verifier = _generateCodeVerifier();
  const challenge = await _generateCodeChallenge(verifier);

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
}
