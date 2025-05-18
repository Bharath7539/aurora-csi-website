export function initInstagram(config) {
  const { clientId, redirectUri, containerId, btnId, errorId, scopes } = config;
  const container = document.getElementById(containerId);
  const loginBtn = document.getElementById(btnId);
  const errorContainer = document.getElementById(errorId);

  // Check if we have a valid access token in localStorage
  const accessToken = localStorage.getItem('instagram_access_token');

  if (accessToken) {
    fetchInstagramPosts(accessToken, container, errorContainer);
  }

  loginBtn.addEventListener('click', () => {
    if (!clientId || clientId === '551946094382529') {
      errorContainer.innerHTML = 'Please configure your Instagram App ID first';
      return;
    }

    // Construct the Instagram authorization URL
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}&response_type=code`;
    window.location.href = authUrl;
  });

  // Check for authorization code in URL
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    // Exchange code for access token (Note: This would typically be done through your backend)
    errorContainer.innerHTML = 'Authorization code received. Please implement token exchange on your backend.';
  }
}

async function fetchInstagramPosts(accessToken, container, errorContainer) {
  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Display the posts
    container.innerHTML = data.data.map(post => `
      <div class="instagram-post">
        <a href="${post.permalink}" target="_blank">
          <img src="${post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}" alt="${post.caption || 'Instagram post'}">
        </a>
        ${post.caption ? `<p class="caption">${post.caption}</p>` : ''}
      </div>
    `).join('');

  } catch (error) {
    errorContainer.innerHTML = `Error fetching Instagram posts: ${error.message}`;
    localStorage.removeItem('instagram_access_token');
  }
} 