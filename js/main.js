import { initInstagramLogin } from './auth.js';
import { fetchInstagramFeed } from './api.js';
import { renderPosts } from './render.js';

const INSTAGRAM_CONFIG = {
  clientId: '551946094382529',
  redirectUri: 'http://127.0.0.1:5500/index.html',
  scope: 'user_profile,user_media'
};

document.getElementById('login-btn').addEventListener('click', () => {
  initInstagramLogin(INSTAGRAM_CONFIG.clientId, INSTAGRAM_CONFIG.redirectUri, INSTAGRAM_CONFIG.scope);
});

if (hasInstagramToken()) {
  const posts = await fetchInstagramFeed(localStorage.getItem('instagram_token'));
  renderPosts(posts, 'instagram-feed');
}
// main.js
import { initInstagramLogin } from './auth.js';
import { fetchInstagramFeed } from './api.js';
import { renderPosts } from './render.js';

