export async function getAllBlogPosts() {
  return fetch("https://api.github.com/repos/anthony-y/blog/contents", {
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  })
}