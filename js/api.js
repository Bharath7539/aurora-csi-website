export async function fetchInstagramFeed(token) {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`);
    return response.json();
  }