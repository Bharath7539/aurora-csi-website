export function renderPosts(posts, containerId) {
    const container = document.getElementById(containerId);
    posts.forEach(post => {
      container.innerHTML += `<img src="${post.media_url}" alt="${post.caption}">`;
    });
  }